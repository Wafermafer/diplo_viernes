var express = require('express');
var router = express.Router();
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
var novedadesModel = require('./../models/novedadesModel');

router.get('/novedades', async function(req, res, next) {
    let novedades = await novedadesModel.getNovedades();
    // tratamiento de las imágenes
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.url(novedad.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: ''
            }
        }
    });
    // Fin - tratamiento de las imágenes

    res.json(novedades);
});

// Handler de contacto y envío de mail
router.post('/contacto', async(req, res) =>{
    const mail = {
        to:'transportesX@gmail.com',
        subject: 'contacto web sitio Transporte',
        html: `${req.body.nombre} se contactó a traves de la web y quiere más información a este correo ${req.body.email}
        <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail);
    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })
}); // Fin envío de mail.


module.exports = router;
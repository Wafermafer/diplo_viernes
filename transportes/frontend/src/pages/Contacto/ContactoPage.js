import { useState } from 'react';
import axios from 'axios';
import './ContactoPage.css';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm);
        }
    }

    return (
        <main class="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="/contacto" method="" class="formulario" onSubmit={handleSubmit}>
                    <p><label for="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p><label for="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="mensaje" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className='acciones'>
                        <input type="submit" value="Enviar" />
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p>: null}
                </form>
            </div>
            <div className="datos">
                <h2>Otras vías de comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Teléfono: 43242388</li>
                    <li>Email: contacto@transportesx.com.ar</li>
                    <li>Facebook: transportesX</li>
                    <li>Twitter: @transportesX</li>
                    <li>skype: transportes_x</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;
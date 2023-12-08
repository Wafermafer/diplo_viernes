import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NovedadesItem from '../../components/novedades/NovedadesItem';
import './NovedadesPage.css';

const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);
    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);
            setLoading(false)
        };
        cargarNovedades();
    },[]);

    return (
        <section className="holder">
            <h2>Novedades</h2>
            {loading ? 
                (<p>Cargando...</p>):
                (
                    novedades.map(item => <NovedadesItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo}
                    ></NovedadesItem>)    
                )
            }
        </section>
    );
}

export default NovedadesPage;
import React from 'react';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <main className='holder'>
            <div className='homeimg'>
                <img src="images/home/img01.jpg" alt="Avion"></img>
            </div>
            <div className='columnas'>
                <div className='bienvenidos'>
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore ab distinctio unde possimus dolorum placeat aperiam veniam officiis sapiente
                        reprehenderit laboriosam eius nostrum commodi, hic id repellendus ipsam nihil? Iste.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum necessitatibus dolorum
                        blanditiis molestiae sed iure inventore reprehenderit, nostrum eveniet temporibus perferendis
                        dolores expedita, quas soluta cumque aspernatur cupiditate ut odit?
                    </p>
                </div>
                <div className='testimonios'>
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
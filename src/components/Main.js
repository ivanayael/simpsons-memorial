import React from 'react';

const Main = () => {
    return (
        <main style={styles.main}>
            <section id="inicio">
                <h2>Bienvenido</h2>
                <p>
                    Esta página celebra los momentos más icónicos de <strong>Los Simpsons</strong>. Descubre episodios y referencias culturales que nos han hecho reír por décadas.
                </p>
            </section>
            <section id="episodios">
                <h2>Top 10 de Episodios Más Icónicos</h2>
                <ol>
                    {/* Lista de episodios */}
                    <li><strong>"Homero el Grande"</strong> - Temporada 6, Episodio 12. Homero descubre la sociedad secreta de los Magios. <a href="https://www.youtube.com/watch?v=Lg2e2XJp2lw" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"¿Quién mató al Sr. Burns? (Parte 1 y 2)"</strong> - Temporada 6 y 7. Un emocionante misterio dividido en dos partes. <a href="https://www.youtube.com/watch?v=KHsS8MFnUNw" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"Marge contra el Monorriel"</strong> - Temporada 4, Episodio 12. Un episodio lleno de sátiras sobre proyectos absurdos. <a href="https://www.youtube.com/watch?v=Zl-2JKSYy3E" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"Lisa la vegetariana"</strong> - Temporada 7, Episodio 5. Lisa adopta una nueva filosofía de vida. <a href="https://www.youtube.com/watch?v=Q8wts9sH7Wg" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"El enemigo de Homero"</strong> - Temporada 8, Episodio 23. La llegada de Frank Grimes a la planta nuclear. <a href="https://www.youtube.com/watch?v=HV4fLRIE8Tg" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"Bart vende su alma"</strong> - Temporada 7, Episodio 4. Una reflexión profunda mezclada con humor. <a href="https://www.youtube.com/watch?v=swg7jQweXJg" target="_blank" rel="noopener noreferrer" >Ver en YouTube</a></li>
                    <li><strong>"La ciudad de Nueva York contra Homero"</strong> - Temporada 9, Episodio 1. Homero enfrenta a la Gran Manzana. <a href="https://www.youtube.com/watch?v=JGnv-PDQLNs" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"Los expedientes secretos de Springfield"</strong> - Temporada 8, Episodio 10. Parodia de los X-Files con una visita extraterrestre. <a href="https://www.youtube.com/watch?v=NRF1hhvl1PA" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    <li><strong>"Homero va a la universidad"</strong> - Temporada 5, Episodio 3. Homero experimenta la vida universitaria. <a href="https://www.youtube.com/watch?v=8zJpnn82eEw" target="_blank" rel="noopener noreferrer" >Ver en YouTube</a></li>
                    <li><strong>"La última salida a Springfield"</strong> - Temporada 4, Episodio 17. Un clásico sobre la lucha sindical. <a href="https://www.youtube.com/watch?v=DsAOtQRTuWY" target="_blank" rel="noopener noreferrer">Ver en YouTube</a></li>
                    {/* Agrega más episodios aquí */}
                </ol>
            </section>
            <section id="contacto">
                <h2>Contacto</h2>
                <p>Conecta conmigo:</p>
                <ul>
                    <li><a href="https://linkedin.com/in/ivanayael" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://instagram.com/ivanayaelcurra" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                </ul>
            </section>
        </main>
    );
};

const styles = {
    main: {
        maxWidth: '900px',
        margin: '20px auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    },
};

export default Main;

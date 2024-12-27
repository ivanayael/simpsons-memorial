import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>
                Diseñado con ❤️ por un fan de Los Simpsons. Visita nuestro <a href="#contacto" style={styles.link}>Contacto</a>.
            </p>
        </footer>
    );
};

const styles = {
    footer: {
        textAlign: 'center',
        padding: '10px 0',
        backgroundColor: '#0056b3',
        color: '#fff',
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
    link: {
        color: '#ffcc00',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default Footer;

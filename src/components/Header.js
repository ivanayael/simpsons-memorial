import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Página Conmemorativa de Los Simpsons</h1>
            <nav>
                <a style={styles.link} href="#inicio">Inicio</a>
                <a style={styles.link} href="#episodios">Episodios Icónicos</a>
                <a style={styles.link} href="#contacto">Contacto</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#ffcc00',
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '2.5em',
        color: '#0056b3',
        margin: '0',
    },
    link: {
        margin: '0 10px',
        textDecoration: 'none',
        color: '#0056b3',
        fontWeight: 'bold',
        transition: 'color 0.3s ease',
    },
};

export default Header;

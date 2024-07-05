import React, { useState } from 'react';

const Home = () => {
    return (
        <>
            <main className="container">
                <header className="port hero">
                    <div className="hero-body">
                        <p className="title has-text-dark">Inicio</p>
                    </div>
                </header>
                <figure className="home-box">
                    <div className="ibox has-background-dark has-text-white">
                        Bienvenido!
                        <br />
                        Porfavor elige el idioma!
                    </div>
                    <div className="ibox has-background-dark has-text-white">
                        Welcome!
                        <br />
                        Please choose the language!
                    </div>
                </figure>
                <br />
                <div className="flagbox">
                    <img className="clflag" src="https://cdn.countryflags.com/thumbs/chile/flag-800.png" alt="chile flag" />
                </div>
                <header className="port hero">
                    <div className="hero-body">
                        <p className="title has-text-dark">Proyectos</p>
                    </div>
                </header>
                <div className="content">
                    <img className="uc" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmV3c25vNDdncmc1MGhiajdkYnVmc3d5bG1zZHZpMGF4NDM0MHN4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jZeZtoObz3wPPcjAhj/giphy.gif" alt="construction" />
                </div>
            </main>
        </>
    );
};

export default Home;

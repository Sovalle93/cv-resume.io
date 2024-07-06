import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faDisease } from '@fortawesome/free-solid-svg-icons';

const Spanish = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(prevShowContactInfo => !prevShowContactInfo);
    };

    return (
        <>
            <main className="layout">
                <section className="header hero">
                    <div className="hero-body">
                        <p className="title has-text-dark">Curriculum Vitae</p>
                    </div>
                </section>
                <div className="flex-container">
                    <section className="card has-background-dark">
                        <div className="card-image">
                            <figure className="image is-2by4">
                                <img
                                    className="profile"
                                    src="https://media.licdn.com/dms/image/D4E35AQGChsPMA5GdSg/profile-framedphoto-shrink_400_400/0/1719447678266?e=1720756800&v=beta&t=oYt2kfxQTDgd2X30qL-ouPa7ZvIReprDWapOrM8PyYo"
                                    alt="profile image"
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media-content">
                                <h5 className="title is-4">Santiago Ovalle</h5>
                            </div>
                            <div className="content">
                                <p className="subtitle is-6">Desarrollador Fullstack Javascript</p>
                                <div className="socials">
                                    <a href="https://www.linkedin.com/in/sovalleg1993/" target="_blank" rel="noopener noreferrer" className="button">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </span>
                                        <span>Linkedin</span>
                                    </a>
                                    <a href="https://github.com/Sovalle93" target="_blank" rel="noopener noreferrer" className="button">
                                        <span className="icon">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                    <div>
                                        <button onClick={toggleContactInfo} className="button">
                                            Contacto
                                        </button>
                                        <div className={`contactinfo ${showContactInfo ? 'show' : ''}`}>
                                            <p>Email: sovalleg93@gmail.com</p>
                                            <p>Telefono: (569) 3403-8405</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content is-small">
                        <h2 className="title has-text-dark">Resumen</h2>
                        <p>
                            Profesional con 7 años de experiencia en diversos rubros tales como Recursos Humanos y Logística.
                            Actualmente cambiando de rubro y buscando mi primer trabajo como desarrollador Fullstack/Frontend/Backend.
                        </p>
                        <h2 className="title has-text-dark is-spaced">Conocimientos</h2>
                        <h5 className="subtitle has-text-dark is-spaced">React</h5>
                            <progress className="progress is-small is-success" max="100">React</progress>
                        <h5 className="subtitle has-text-dark is-spaced">Javascript</h5>
                            <progress className="progress is-small is-success" max="100">Javascript</progress>
                        <h5 className="subtitle has-text-dark is-spaced">CSS</h5>
                            <progress className="progress is-small is-success" max="100">CSS</progress>
                        <h5 className="subtitle has-text-dark is-spaced">HTML</h5>
                            <progress className="progress is-small is-success" max="100">HTML</progress>
                        <h5 className="subtitle has-text-dark is-spaced">Node</h5>
                            <progress className="progress is-small is-success" max="100">Node</progress>
                        <h5 className="subtitle has-text-dark is-spaced">SQL</h5>
                            <progress className="progress is-small is-success" max="100">SQL</progress>
                    </section>
                </div>
                <section className="section">
                    <h1 className="title has-text-dark is-spaced">Experiencia</h1>
                    <div className="box has-background-dark">
                        <article className="media">
                            <div className="media-center">
                            <figure className="image is-120x64">
                                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/CA-Canada-Flag-icon.png" alt="canadaflag" />
                                <small>British Columbia</small>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <h6>Freshprep</h6>
                                <small>Julio 2022 - Marzo 2023</small>
                                <br />
                                Order Picker Support
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>BC Housing</strong> 
                                <br />
                                <small>Abril 2022 - Junio 2022</small>
                                <br />
                                Asistente de Recursos Humanos
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Amazon Logistics</strong>
                                <br />
                                <small>Junio 2021 - Marzo 2022</small>
                                <br />
                                Ambasador
                                </p>
                            </div>
                        </div>
                        </article>
                    </div>
                </section>
                <div className="pandemia">
                        <strong className="subtitle has-text-dark">Pandemia <br/><FontAwesomeIcon icon={faDisease} beat size="lg" /></strong>
                        <small>Marzo 2020 - Enero 2021</small>
                </div>
                <section className="section">
                    <div className="box has-background-dark">
                        <article className="media">
                            <div className="media-center">
                            <figure className="image is-120x64">
                                <img src="https://icons.iconarchive.com/icons/wikipedia/flags/256/CL-Chile-Flag-icon.png" alt="chileflag" />
                                <small>Chile</small>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>Hotel Casa Establo</strong> 
                                <br />
                                <small>Septiembre 2019 - Febrero 2020</small>
                                <br />
                                HR Profesional
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>TalentPro SPA</strong> 
                                <br />
                                <small>Febrero 2018 - Julio 2019</small>
                                <br />
                                HR Business Partner
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Freelance</strong> 
                                <br />
                                <small>Abril 2017 - Enero 2018</small>
                                <br />
                                Analista de Reclutamiento y Selección
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Mandomedio</strong> 
                                <br />
                                <small>Abril 2017 - Agosto 2017</small>
                                <br />
                                Reclutador
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Banco Central</strong> 
                                <br />
                                <small>Agosto 2016 - Diciembre 2016</small>
                                <br />
                                Practica Profesional
                                </p>
                            </div>
                        </div>
                        </article>
                    </div>
                </section>
                <section className="section">
                    <div className="edcontainer">
                        <h1 className="title has-text-dark is-spaced">Educación</h1>
                        <section className="educations">
                            <article className="message is-medium">
                                    <div className="message-header">
                                        <p>Psicología</p>
                                    </div>
                                    <div className="message-body">
                                        <figure className="image is-64x64">
                                            <img src="https://www.uandes.cl/wp-content/themes/uandes-main/img/elements/logo_uandes_macro.webp" alt="andes" />
                                        </figure>
                                        <br/>
                                        Marzo 2012 - Abril 2017
                                    </div>
                                </article>
                                <article className="message is-medium">
                                    <div className="message-header">
                                        <p>International Business Management</p>
                                    </div>
                                    <div className="message-body">
                                        <figure className="image is-64x64">
                                            <img src="https://www.lcmundo.com/media/images/2018-11/md_bf803ac2ce444366977e06b2ff30c459.png" alt="greystone" />
                                        </figure>
                                        <br/>
                                        Febrero 2021 - Julio 2022
                                    </div>
                                </article>
                                <article className="message is-medium">
                                    <div className="message-header">
                                        <p>Desarrollador Fullstack Javascript</p>
                                    </div>
                                    <div className="message-body">
                                        <figure className="image is-64x64">
                                            <img src="https://scontent.fscl37-1.fna.fbcdn.net/v/t1.6435-9/51603065_2334899503209585_7176558754370945024_n.png?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeH_CGDA3q3YREfYJxCHExaqkWRxem3qi4yRZHF6beqLjOoKKNlT6FpMVmw5Z4lh5iw&_nc_ohc=zOxnNperhsAQ7kNvgFf1J0I&_nc_ht=scontent.fscl37-1.fna&oh=00_AYDqbT6mnh62D2iCTE369w1ZffUWiV1BooLuSxJijd0mQA&oe=66AEF88B" alt="academy" />
                                        </figure>
                                        <br/>
                                        Abril 2023 - Abril 2024
                                    </div>
                                </article>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Spanish;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faDisease } from '@fortawesome/free-solid-svg-icons';

const English = () => {
    const [showContactInfo, setShowContactInfo] = useState(false);

    const toggleContactInfo = () => {
        setShowContactInfo(prevShowContactInfo => !prevShowContactInfo);
    };

    return (
        <>
            <main className="layout">
                <section className="header hero">
                    <div className="hero-body">
                        <p className="title has-text-dark">Resume</p>
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
                                <p className="title is-4">Santiago Ovalle</p>
                            </div>
                            <div className="content">
                                <p className="subtitle is-6">Fullstack Developer Javascript</p>
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
                                            Contact
                                        </button>
                                        <div className={`contactinfo ${showContactInfo ? 'show' : ''}`}>
                                            <p>Email: sovalleg93@gmail.com</p>
                                            <p>Phone: (569) 3403-8405</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content is-small">
                        <h2 className="title has-text-dark">Summary</h2>
                        <p>
                            Professional with 7 years of experience in different industries such as HR and Logistics.
                            Starting a new career and looking for my first job as a Fullstack/Frontend/Backend developer.
                        </p>
                        <h2 className="title has-text-dark is-spaced">Skills</h2>
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
                    <h1 className="title has-text-dark is-spaced">Experience</h1>
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
                                <strong>Freshprep</strong> 
                                <br />
                                <small>July 2022 - March 2023</small>
                                <br />
                                Order Picker Support
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>BC Housing</strong> 
                                <br />
                                <small>April 2022 - June 2022</small>
                                <br />
                                HR Assistant
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Amazon Logistics</strong>
                                <br />
                                <small>June 2021 - March 2022</small>
                                <br />
                                Ambassador
                                </p>
                            </div>
                        </div>
                        </article>
                    </div>
                </section>
                <div className="pandemia">
                        <strong className="subtitle has-text-dark">Pandemic <br/><FontAwesomeIcon icon={faDisease} beat size="lg" /></strong>
                        <small>March 2020 - January 2021</small>
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
                                <small>September 2019 - February 2020</small>
                                <br />
                                HR Profesional
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>TalentPro SPA</strong> 
                                <br />
                                <small>February 2018 - July 2019</small>
                                <br />
                                HR Business Partner
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Freelance</strong> 
                                <br />
                                <small>April 2017 - January 2018</small>
                                <br />
                                Recruitment and Hiring Analyst
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Mandomedio</strong> 
                                <br />
                                <small>April 2017 - August 2017</small>
                                <br />
                                Recruiter
                                </p>
                            </div>
                            <div className="content">
                                <p>
                                <strong>Central Bank of Chile</strong> 
                                <br />
                                <small>August 2016 - December 2016</small>
                                <br />
                                Internship
                                </p>
                            </div>
                        </div>
                        </article>
                    </div>
                </section>
                <section className="section">
                    <div className="edcontainer">
                        <h1 className="title has-text-dark is-spaced">Education</h1>
                        <section className="educations">
                            <article className="message is-medium">
                                    <div className="message-header">
                                        <p>Psychology</p>
                                    </div>
                                    <div className="message-body">
                                        <figure className="image is-64x64">
                                            <img src="https://www.uandes.cl/wp-content/themes/uandes-main/img/elements/logo_uandes_macro.webp" alt="andes" />
                                        </figure>
                                        <br/>
                                        March 2012 - April 2017
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
                                        February 2021 - July 2022
                                    </div>
                                </article>
                                <article className="message is-medium">
                                    <div className="message-header">
                                        <p>Fullstack Developer Javascript</p>
                                    </div>
                                    <div className="message-body">
                                        <figure className="image is-64x64">
                                            <img src="https://scontent.fscl37-1.fna.fbcdn.net/v/t1.6435-9/51603065_2334899503209585_7176558754370945024_n.png?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeH_CGDA3q3YREfYJxCHExaqkWRxem3qi4yRZHF6beqLjOoKKNlT6FpMVmw5Z4lh5iw&_nc_ohc=zOxnNperhsAQ7kNvgFf1J0I&_nc_ht=scontent.fscl37-1.fna&oh=00_AYDqbT6mnh62D2iCTE369w1ZffUWiV1BooLuSxJijd0mQA&oe=66AEF88B" alt="academy" />
                                        </figure>
                                        <br/>
                                        April 2023 - April 2024
                                    </div>
                                </article>
                        </section>
                    </div>
                </section>
            </main>
        </>
    );
};

export default English;

import React from 'react';
import VikingsAtStraumseySqPng from '../img/vikings_at_straumsey.png';

const About = () => {

    return (
        <section id="content">
            <article>
                <p>
                Hello. I use this site to practice web development and to compile things interesting to me. It is not for financial gain.
                </p>

                <p>
                The name Stromsy is derived from Straumsey,  the name of a mysterious island explored by Lief Eriksson. It is briefly described in the <a href="http://sagadb.org/eiriks_saga_rauda.en">Saga of Erik the Red</a>. Various locations have been proposed for Straumsey ranging from Baffin Island, Martha's Vineyard or even Manhattan.
                </p>

                <section id="about-img-container">
                    <img id="about-vikings-at-straumsey" src={VikingsAtStraumseySqPng} alt="Lief Eriksson at Straumsey" />
                </section>

                <p>
                webmaster at stromsy dot com
                </p>
            </article>
        </section>
    );

}

export default About

import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import House from '../assets/images/house.png';

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/topseller`, config);
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/`, config);
                setRealtors(res.data);
            }
            catch (err) {

            }
        };

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Meilleur vendeur:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };

    return (
        <main className='about'>
            <Helmet>
            <title>Bouesso-Service - Apropos</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>
            <header className='about__header'>
            <h1 className='about__heading'>Apropos de Bouesso-Service</h1>
            </header>
            <section className='about__info'>
                <div className='row'>
                    <div className='col-3-of-4'>
                    <h2 className='about__subheading'>Pourquoi nous Choisir ?</h2> 
                    <p className='about__paragraph'>
                             Chez Bouesso-Service, notre mission première est de rendre le processus d'achat et de vente de propriétés aussi simple
                              et transparent que possible pour nos clients. Nous nous démarquons dans le secteur immobilier en combinant notre profonde
                               connaissance du marché à l'utilisation de technologies de pointe et à un service client inégalé. Notre équipe, forte de
                                nombreuses années d'expérience, est dédiée à vous accompagner personnellement à chaque étape, que vous soyez à la 
                                recherche de votre premier domicile ou que vous souhaitiez vendre une propriété. Nous mettons un point d'honneur à 
                                placer vos intérêts en priorité, vous assurant ainsi une expérience sereine et réussie.
                             </p>    
                        <div className='about__display'>
                            <img className='about__display__image' src={House} alt='' />
                        </div>
                        <p className='about__paragraph'>
                                Chez nous, la durabilité n'est pas qu'un concept ; c'est une pierre angulaire de notre activité. Nous sommes fermement 
                                convaincus de l'importance de bâtir un avenir plus vert et nous intégrons cette conviction dans chaque aspect de notre 
                                travail. En adoptant des pratiques écoresponsables et en privilégiant les maisons écoénergétiques pour nos clients, nous
                                 faisons notre part pour l'environnement. Notre équipe, le cœur de notre succès, est composée de professionnels de l'immobilier 
                                 passionnés et expérimentés. Leur expertise et leur dévouement nous permettent de rester à l'avant-garde du secteur, 
                                 tout en œuvrant pour un monde plus durable.                                
                                </p>
                    </div>
                    <div className='col-1-of-4'>
                        {getTopSeller()}
                    </div>
                </div>
            </section>
            <section className='about__team'>
                <div className='row'>
                <h2 className='about__h2'>Rencontrez notre équipe!</h2>
                </div>
                {getAllRealtors()}
            </section>
        </main>
    );
};

export default About;

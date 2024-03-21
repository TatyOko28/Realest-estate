import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // Import useParams

const ListingDetail = () => {
    const [listing, setListing] = useState({});
    const [realtor, setRealtor] = useState({});
    const [price, setPrice] = useState(0);

    // Use useParams hook to access the URL parameters
    const { id } = useParams(); // Assuming the parameter name is id

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    useEffect(() => {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/api/listings/${id}`, config)
        .then(res => {
            setListing(res.data);
            setPrice(numberWithCommas(res.data.price));
        })
        .catch(err => {
            // Handle error
        });
    }, [id]); // Depend on id from useParams

    useEffect(() => {
        const realtorId = listing.realtor;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        if (realtorId) {
            axios.get(`${process.env.REACT_APP_API_URL}/api/realtors/${realtorId}`, config)
            .then(res => {
                setRealtor(res.data);
            })
            .catch(err => {
                // Handle error
            });
        }
    }, [listing.realtor]);

    const displayInteriorImages = () => {
        let images = [];
        images.push(
            <div key={1} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_1 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_2 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_3 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={2} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_4 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_5 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_6 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={3} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_7 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_7} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_8 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_8} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_9 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_9} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={4} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_10 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_10} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_12 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_11} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_12 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_12} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={5} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_13 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_13} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_14 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_14} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_15 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_15} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={6} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_16 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_16} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_17 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_17} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_18 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_18} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        );

        images.push(
            <div key={7} className='row'>
                <div className='col-1-of-3'>
                    {
                        listing.photo_19 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_19} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'>
                    {
                        listing.photo_20 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_20} alt='' />
                            </div>
                        ) : null
                    }
                </div>
                <div className='col-1-of-3'></div>
            </div>
        );
        
        return images;
    };

    // Component rendering logic...
    return (
        <div className='listingdetail'>
            <Helmet>
                <title>Bouesso-Service - Details | {`${listing.title}`}</title>
                <meta
                    name='description'
                    content='Listing detail'
                />
            </Helmet>
            <div className='listingdetail__header'>
                <h1 className='listingdetail__title'>{listing.title}</h1>
                <p className='listingdetail__location'>{listing.city}, {listing.state}, {listing.zipcode}</p>
            </div>
            <div className='row'>
                <div className='listingdetail__breadcrumb'>
                    <Link className='listingdetail__breadcrumb__link' to='/'>Accueil</Link> / {listing.title}
                </div>
            </div>
            <div className='row'>
                <div className='col-3-of-4'>
                    <div className='listingdetail__display'>
                        <img className='listingdetail__display__image' src={listing.photo_main} alt='' />
                    </div>
                </div>
                <div className='col-1-of-4'>
                    <div className='listingdetail__display'>
                        <img className='listingdetail__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='listingdetail__realtor'>{realtor.name}</h3>
                    <p className='listingdetail__contact'>{realtor.phone}</p>
                    <p className='listingdetail__contact'>{realtor.email}</p>
                    <p className='listingdetail__about'>{realtor.description}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-1-of-2'>
                    <ul className='listingdetail__list'>
                        <li className='listingdetail__list__item'>Type de maison: {listing.home_type}</li>
                        <li className='listingdetail__list__item'>Prix: ${price}</li>
                        <li className='listingdetail__list__item'>Chambres: {listing.bedrooms}</li>
                        <li className='listingdetail__list__item'>Douches: {listing.bathrooms}</li>
                        <li className='listingdetail__list__item'>Surface: {listing.sqft}</li>
                    </ul>
                </div>
                <div className='col-1-of-2'>
                    <ul className='listingdetail__list'>
                        <li className='listingdetail__list__item'>Type de vente: {listing.sale_type}</li>
                        <li className='listingdetail__list__item'>Addresse: {listing.address}</li>
                        <li className='listingdetail__list__item'>Ville: {listing.city}</li>
                        <li className='listingdetail__list__item'>Pays: {listing.state}</li>
                        <li className='listingdetail__list__item'>Code postal: {listing.zipcode}</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <p className='listingdetail__description'>{listing.description}</p>
            </div>
            {displayInteriorImages()}
        </div>
    );
};

export default ListingDetail;

import React, { useState, useEffect } from 'react';
import { Data } from './Data.jsx';
import styles from '../Modules/Popularitems.module.css';

function Popularitems() {
    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let sixProducts = []

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Data();
                setItems(data.slice(0, 6));
            } catch (err) {
                setError('Failed to load popular items');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }
    return (
        <>
            <div className={`container text-center ${styles.popular}`}>
                <h1 className="text-center my-4 mb-5">Popular Items</h1>
                <div className="row">
                    {items.map((item) => (
                        <div className="col-12 col-sm-6 col-md-6 mb-4" key={item.id}>
                            <button type="button" className="bg-dark border-0 p-0">
                                <a href="#" className="nav-link text-start">
                                    <div className="card bg-dark text-light h-100" style={{ width: "30rem", height: "12rem"}}>
                                        <img src="rrr.png" className="card-img-top" alt={item.title} style={{ width: "29rem", margin: "5px" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.body}</p>
                                        </div>
                                    </div>
                                </a>
                            </button>
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default Popularitems

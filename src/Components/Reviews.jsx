import React from 'react';

const reviews = [
    {
        id: 1,
        quote: "Learned more about security vulnerabilities",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum faucibus condimentum sem urna tellus tincidunt.",
        name: "John Carter",
        role: "Software Engineer",
        img: "https://via.placeholder.com/50",
        rating: 5,
    },
    {
        id: 2,
        quote: "ST helped me to identify bugs in my project",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum faucibus condimentum sem urna tellus tincidunt.",
        name: "Michael Scott",
        role: "CyberSecurity Analyst",
        img: "https://via.placeholder.com/50",
        rating: 5,
    },
    {
        id: 3,
        quote: "ST helped me to identify bugs in my project",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum faucibus condimentum sem urna tellus tincidunt.",
        name: "Michael Scott",
        role: "CyberSecurity Analyst",
        img: "https://via.placeholder.com/50",
        rating: 5,
    },
    {
        id: 4,
        quote: "Learned more about security vulnerabilities",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum faucibus condimentum sem urna tellus tincidunt.",
        name: "John Carter",
        role: "Software Engineer",
        img: "https://via.placeholder.com/50",
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <div className="container-fluid">
            <div className="py-5" style={{ borderRadius: "60px" , backgroundColor:"#7C7C7C"}}>
            <div className="container">
                <h2 className="text-center mb-4">See what people are saying about us.</h2>
                <div className="row">
                    {reviews.map((review) => (
                        <div className="col-6 col-md-6 mb-4" key={review.id}>
                            <div className="card h-100 p-3 shadow-sm">
                                <blockquote className="blockquote mb-3">
                                    <p className="mb-2">"{review.quote}"</p>
                                    <footer className="blockquote-footer">
                                        <small>{review.text}</small>
                                    </footer>
                                </blockquote>
                                <div className="d-flex align-items-center">
                                    <img
                                        src={review.img}
                                        alt={review.name}
                                        className="rounded-circle me-3"
                                        style={{ width: "50px", height: "50px" }}
                                    />
                                    <div>
                                        <h6 className="mb-0">{review.name}</h6>
                                        <small className="text-muted">{review.role}</small>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <span key={index} className="text-warning">&#9733;</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Reviews;

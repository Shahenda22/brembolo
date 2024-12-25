import React from 'react';

const Services = () => {
  return (
    <div className="services-section py-5 mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-light">
            <h2 className="mb-4">Our Services</h2>
            <p>
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
              to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <button
              className="btn btn-outline-warning mt-3 px-4 py-2"
              style={{ borderRadius: "5px", fontWeight: "bold" }}
            >
              Get Started
            </button>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src="./services.png"
              alt="Security"
              className="img-fluid"
              style={{ maxWidth: "400px", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

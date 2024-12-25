import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);     

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <p>{product.description}</p>
      <h2>{product.price} USD</h2>
      <button
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsPage;

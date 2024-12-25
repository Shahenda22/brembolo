// import React from 'react';
// import Data from '../Components/Data';
// import { useState, useEffect } from "react";
// import styles from "../Modules/Products.module.css";
// function Productspage() {
//     const [items, setItems] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 10;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const data = await Data();
//                 setItems(data);
//             } catch (err) {
//                 setError("Failed to load popular items");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <p className="text-center text-light">Loading...</p>;
//     }

//     if (error) {
//         return <p className="text-center text-danger">{error}</p>;
//     }
//     const Pagination = ({ totalItems, itemsPerPage, paginate, currentPage }) => {
//         const pageNumbers = [];

//         for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
//             pageNumbers.push(i);
//         }
//     }
//     return (
//         <>
//             <div className="container">
//                 <h1 className='text-center text-light'>Products</h1>
//                 <div class="text-light text-center">
//                     <ul class="navbar nav text-center">
//                         <li class="nav-item"><a href="#" class="nav-link text-light">Best Sellers</a></li>
//                         <li class="nav-item"><a href="#" class="nav-link text-light">Cameras</a></li>
//                         <li class="nav-item"><a href="#" class="nav-link text-light">Home Automation</a></li>
//                         <li class="nav-item"><a href="#" class="nav-link text-light">Systems</a></li>
//                         <li class="nav-item"><a href="#" class="nav-link text-light">Sensors</a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className={`container text-center ${styles.popular}`}>
//           <h1 className="text-center my-4 mb-5">Popular Items</h1>
//           <div className="row">
//             {currentItems.map((item) => (
//               <div className="col-12 col-sm-6 col-md-6 mb-4" key={item.id}>
//                 <button type="button" className="bg-dark border-0 p-0">
//                   <a href="#" className="nav-link text-start">
//                     <div
//                       className="card bg-dark text-light h-100"
//                       style={{ width: "30rem", height: "12rem" }}>
//                       <img
//                         src="rrr.png"
//                         className="card-img-top"
//                         alt={item.title}
//                         style={{ width: "29rem", margin: "5px" }}/>
//                       <div className="card-body">
//                         <h5 className="card-title">{item.title}</h5>
//                         <p className="card-text">{item.body}</p>
//                       </div>
//                     </div>
//                   </a>
//                 </button>
//               </div>
//             ))}
//           </div>
//           <Pagination totalItems={items.length} itemsPerPage={itemsPerPage} paginate={paginate} currentPage={currentPage}/>
//         </div>
//         <nav>
//           <ul className="pagination justify-content-center">
//             {pageNumbers.map((number) => (
//               <li
//                 key={number}
//                 className={`page-item ${currentPage === number ? "active" : ""}`}>
//                 <button
//                   onClick={() => paginate(number)}
//                   className="page-link"
//                   style={{ cursor: "pointer" }}>
//                   {number}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </>
//     )
// }

// export default Productspage;

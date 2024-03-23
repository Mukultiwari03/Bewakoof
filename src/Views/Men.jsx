import React, { useState, useEffect } from 'react';
import Cards from '../Components/Cards';
import Filters from '../Components/Filters';
import { Container } from 'react-bootstrap';
import '../ViewsCSS/Men.css';


function Men({handleClick}) {
  const [products, setProducts] = useState([]);
  
  const filter = [
    {
      No: 0,
      title: "Category",
      category: ["T-Shirt", "Boxer", "Vest", "Shirt", "Joggers"]
    },
    {
      No: 1,
      title: "Sizes",
      category: ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
    },
    {
      No: 2,
      title: "Brand",
      category: ["Bewakoof®", "Bewakoof Air® 1.0", "Campus Sutra", ]
    },
    {
      No: 3,
      title: "Color",
      category: ["red", "blue", "black"]
    },
    {
      No: 4,
      title: "Design",
      category: ["Graphic Print", "Solid", "Printed", "Aop", "Typography", "Color Block", "Checked", "Striped", "Washed", "Self Design", "Tie & Dye", "Camouflage", "Textured", "Ombre", "Abstract", "Embroidered", "Floral Print", "Polka Print", "Geometric Print", "Paisley", "Ethnic Motifs", "Polka Dots"]
    },
    {
      No: 5,
      title: "Fit",
      category: []
    },
    {
      No: 6,
      title: "Sleeve",
      category: []
    },
    {
      No: 7,
      title: "Neck",
      category: []
    },
    {
      No: 8,
      title: "Type",
      category: []
    },
    {
      No: 9,
      title: "Ratings",
      category: []
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:9000")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const applyFilter = (title, event) => {
    let filteredProducts = [];

    switch (title) {
      case "Color":
        filteredProducts = products.filter((product) => product.color === event);
        break;
      case "Sizes":
        filteredProducts = products.filter((product) => product.size === event);
        break;
      default:
        filteredProducts = products;
    }

    setProducts(filteredProducts);
  };

  return (
    <div>
    
      <Container className='my-4 mens'>
        <h2>Mens Clothing </h2>
       
      </Container>
      <Container className='container-div'>
        <div className='filters'>
     
          <Filters action={applyFilter} data={filter} />
        </div>
        <div className='Output-div'>
          {products.map((product, index) => (
            <Cards key={index} data={product} handleClick={handleClick}/>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Men;

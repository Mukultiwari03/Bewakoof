import React, { useState, useEffect } from 'react';
import MenOutput from '../Components/MenOutput';
import Filters from '../Components/Filters';
import { Container } from 'react-bootstrap';
import '../ViewsCSS/Men.css';

function Men() {
  const [products, setProducts] = useState([]);
  
  const filter = [
    {
      No: 0,
      title: "Category",
      category: ["T-Shirt", "Boxer", "Vest", "Shirt", "Joggers", "Shorts", "Sweatshirt", "Hoodies", "Pyjama", "Jeans", "Jacket", "Co-Ordinates", "Track Pant", "Sweater", "Trousers", "Casual Pants", "Pant", "Tracksuit", "Kurta", "Protective Outdoor Mask", "Sweatshirt & Jogger Set", "Cloth Mask"]
    },
    {
      No: 1,
      title: "Sizes",
      category: ["XS", "S", "M", "L", "XL", "2XL", "3XL"]
    },
    {
      No: 2,
      title: "Brand",
      category: ["Bewakoof®", "Bewakoof Air® 1.0", "Campus Sutra", "Xyxx", "Rigo", "Bewakoof Heavy Duty® 1.0", "Urban Scottish", "Bushirt", "What's Down", "The Daily Outfits", "Indiclub", "Rodamo", "Door 74", "Bewakoof American Pima", "Difference Of Opinion", "Flynoff", "Mad Over Print", "Shopolics", "Dillinger", "Chkokko", "Dripcult", "East Coast Way", "Old Grey", "Smugglerz", "The Dry State", "Harpita", "Dimeh", "Olavi", "Kranium", "Trends Tower", "7 Shores", "Fans Army", "Urban Legends", "Brown Mocha", "Kotty", "Showoff", "Vyve", "Blanck", "Botnia", "Dropout Society", "The Bargain Street", "Weezy", "Belliskey", "Brown Brothers", "Truebuyworld", "Vibebling"]
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
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 6,
      title: "Sleeve",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 7,
      title: "Neck",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 8,
      title: "Type",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 9,
      title: "Ratings",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 10,
      title: "Discount",
      category: ["hello", "Hii", "Bye"]
    },
    {
      No: 11,
      title: "Sort By",
      category: ["hello", "Hii", "Bye"]
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
      <Container className='my-4 home'>Home  /  Clothing</Container>
      <Container className='my-4 mens'>
        <h2>Mens Clothing <span className='text-secondary'>({products.length})</span></h2>
      </Container>
      <Container className='container-div'>
        <div className='filters'>
          <p className='para'>Filters</p>
          <Filters action={applyFilter} data={filter} />
        </div>
        <div className='Output-div'>
          {products.map((product, index) => (
            <MenOutput key={index} data={product} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Men;

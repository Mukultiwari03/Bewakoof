import React from 'react'
import HeroSec from '../Components/Hero'
import { Container } from 'react-bootstrap'
import '../ViewsCSS/Home.css'
import Images from '../Components/Images'
function Home() {
  const images = [
    {
      image: "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-common--1--1706616684.gif",
      title: "Bestsellers"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop-New-Arrivals-1706616683.jpg",
      title: "New Arrivals"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/category-icon-for-Desktop---1--1697613231.jpg",
      title: "Official Collaborations"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/category-icon-Desktop--1706616685.jpg",
      title: "Plus Size"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Customization--1--1693212866.jpg",
      title: "Customization"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Combos-1693212865.gif",
      title: "Combos"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/thumbnails-Revamp-Vote-1693212866.jpg",
      title: "Vote for Designs"
    },
    {
      image: "https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg",
      title: "Last Sizes Left"
    },
  ]

  const images2=[
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/unnamed--5--1706513552.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Co-ords-Men-1707280970.jpg"},
  ]

  const images3=[
    {image: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg"},
    {image: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Cargos-1704270812-1706511406.webp"},
    {image: "https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Dresses-1704270296-1706511533.webp"},
  ]
  let Heroimages=[
    {
        image:"https://images.bewakoof.com/uploads/grid/app/1x1-common-1709616659.gif",
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/Boyfriend-Tshirt-Women-1x1-banner--2--1709483581.jpg",
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/EOSS-1X1-top-corner-unit-copy-ezgif-com-optimize-1709535154.gif",
    },
    {
        image:"https://images.bewakoof.com/uploads/grid/app/1x1-Banner-Graphic-Printed-Oversized-Tshirts-Common--2--1709734299.gif"
    }
]
let Heroimages2=[
  {
      image:"https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg",
  },
  {
      image:"https://images.bewakoof.com/uploads/grid/app/American-PIMA-PC-Size-Banner-480x457-1707137667.jpg",
  },
  {
      image:"https://images.bewakoof.com/uploads/grid/app/1000070037-1707137668.jpg",
  },
  {
      image:"https://images.bewakoof.com/uploads/grid/app/HD-PC-Size-Banner-480x457-1707137667.jpg"
  }
]
  return (
    <>
        <HeroSec data={Heroimages} height="534" width="534" show={3}/>
      <Container className='d-flex justify-content-center p-4'>
        <div className='d-flex gap-3 p-4'>
          {
            images.map((e) => {
              return <Images data={e} heaight="174" />
            })

          }
        </div>

      </Container>
      <Container fluid>
        <img className='full-img' src="https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif" alt="" />
      </Container>
      <Container className='d-flex flex-column align-items-center' fluid>
        <h5 className='p-1'>TRENDING CATEGORIES</h5>
        <Container className='d-flex' fluid>
          {
            images2.map((e) => {
              return <Images data={e} height="370" />
            })
          }
        </Container>
        <Container className='d-flex' fluid>
          {
            images3.map((e) => {
              return <Images data={e} height="370" />
            })
          }
        </Container>
      </Container>
      <Container fluid>
        <img className='full-img' src="https://images.bewakoof.com/uploads/grid/app/thin-banner-desktop-YFED--2--1710400419.png" alt="" />
      </Container>
      <h4 className='text-center p-1'>Bewakoof Originals</h4>
      <HeroSec data={Heroimages2} height="371" width="389" show={4}/>
    </>
  )
}

export default Home

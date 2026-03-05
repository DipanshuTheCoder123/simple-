
import axios from 'axios'
import './App.css'
import Category from './Componant/Category'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Headers from './Componants/Headers'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Componant/Footer'

function App() {

  let [finalCatagory, setfinalCatagory] = useState([]);
  let [finalProduct, setfinalProduct] = useState([]);
  let [singlecategory, setsinglecategory] = useState("beauty");
  //  let [getid ,setgetid]=useState(""); 
  //category
  function FetchAllData() {

    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((fnal) => {
        console.log(fnal);
        setfinalCatagory(fnal)
      })
  }

  //Product
  function FetchAllProduct() {
    axios.get(`https://dummyjson.com/products/category/${singlecategory}`)
      .then((res) => {
        setfinalProduct(res.data.products);
      })
  }

  useEffect(() => {
    FetchAllData();
    FetchAllProduct();
  }, [])

  useEffect(() => {
    if (singlecategory != "") {
      FetchAllProduct();
    }
  }, [singlecategory])


  return (
    <>
      {/* //HEADER */}
      <Headers />
  
     {/* //OUER PRODCUCT */}
      <div className='py-[40px]'>
        <div className='max-w-[1380px] mx-auto'>
          <h1 className='text-[50px] text-center font-bold'>Our Product </h1>
          <div className='grid grid-cols-[30%_auto]' style={{ gap: "30px" }}>
            <div className=''>
              <div className=''>
                <Category allcatagory={finalCatagory} setsinglecategory={setsinglecategory} />
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-2' >
              {finalProduct.map((v, i) => {
                return (
                  <ProductIteam key={i} value={v} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
       <Carousel className='silder'>

      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>Welcome to our ecommerce store</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Big Sale</h3>
          <p>Get best discounts today</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/1200/400?3"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>New Products</h3>
          <p>Latest arrivals available now</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    <Footer/>
    </>
  )
}



export default App


function ProductIteam({ value }) {
  return (
    <div className='text-center iteam'  >
      <img
        src={value.images[0]}
        alt={value.title}
        style={{ cursor: "pointer" }}
        className="w-full h-[300px] object-cover"
      ></img>
      <h2 className="font-bold mt-2">
        {value.title}
      </h2>

      <p className="text-gray-500 text-sm">
        {value.brand}
      </p>

      <p className="text-green-600 font-semibold">
        ₹{value.price}
      </p>
      <p>
        <Link to={`card/${value.id}`}>
          <button className='card-button'>Add to Card</button>
        </Link>
      </p>
    </div>
  )
}
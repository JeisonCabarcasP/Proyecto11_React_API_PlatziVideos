import React, { useState, useEffect } from 'react'; //useState maneja el estado y useeffect hace RX/TX a las apiso componentes
import Header from '../components/Header';
import Search from "../components/Search";
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  console.log(videos)

  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="Mi lista" >
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories >

      <Categories title="Tendencias" >
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories >

      <Categories title="Originales" >
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories >

      <Footer />
    </div>
  )
};

export default App;
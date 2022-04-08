import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData'

function App() {



  return (
    <div >
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;

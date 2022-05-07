import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from '../components/HomePage/Header/Slider/Slider';
import Header from '../components/HomePage/Header/Header';
import Layout from '../components/Layout';
import Options from '../components/HomePage/Options/Options';
import HomePage from '../components/HomePage/Home/Home';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import NavBar from '../components/HomePage/Header/NavBar';
import CategoryNav from '../components/HomePage/Header/Category/CategoryNav';

export const getStaticProps = async () => {

  const res = await fetch (`https://www.logyzone.com/api/products`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
});

  const data = await res.json();

  const img = await fetch (`https://www.logyzone.com/api`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
});

  const image = await img.json();

  if (!data && !image) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {

    props: { products: data, sliderImages: image},
    revalidate: 60,

  }
}

export default function Home({products, sliderImages}) {
    

  const home = "";

  const [cartItems, setCartItems] = useState(0);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setCartItems(cart.cartItems);
  });
  
  return (
      <Layout pageTitle="Dhakdum.com" pageDescription="">
        <NavBar cartItems={cartItems}/>
        <CategoryNav/>
        <Options/>
        <Slider sliderImages={sliderImages}/>
        <HomePage products={products}/>
      </Layout>
  )
}
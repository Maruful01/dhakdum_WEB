import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Skeleton from '../Skeleton';
import ProductCard from './productCard/ProductCard';
import ProductSkeleton from '../Header/ProductSkeleton';
import Link from 'next/link';



const Home = ({products}) => {

    return (
        <section>       
            <div   className="products-component">
                          
                           {
                              products.map (product => 
                             
                             <div  key={product._id}>
                             <Link href={`/${product._id}`}><a> <ProductCard key={product._id} product={product}/>  </a></Link>  
                             </div> 
                             
                             ) 
                           }             
           </div>
        </section>
    );
};

export default Home;
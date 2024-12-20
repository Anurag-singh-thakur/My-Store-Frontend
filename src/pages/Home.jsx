import React from 'react';
import ProductGrid from '../component/ProductGrid';
import Testimonials from '../component/Testimonials';
import Footer from "../component/Footer"
import Categories from '../component/Cateories';
import Hero from "../component/Hero"

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Hero />
      <Categories />
      <ProductGrid />
      <Testimonials />
    </div>
  );
}
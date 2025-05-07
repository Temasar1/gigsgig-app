import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Categories from "../components/categories";
import PopularTasks from "../components/populartasks";
import Testimonials from "../components/testimonials";
import HowItWorks from "../components/howitworks";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    
      <Header />
      <Hero />
      <Categories />
      <PopularTasks />
      <Testimonials />
      <HowItWorks />
      <Footer />
      </main>
    </div>
  );
}

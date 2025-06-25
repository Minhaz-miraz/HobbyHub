import React from 'react';
import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Fade } from 'react-awesome-reveal';

const Review = () => {
    const testimonials = [
  {
    image: 'https://up2date.uni-bremen.de/img/c/Titel-up2date_klein.jpg',
    name: 'Tom Boklar',
    role: 'writer',
    rating: 5,
    text: `best community for uprising writter, high passion, seasonal event,all are awesome.`,
  },
  {
    image: 'https://media.npr.org/assets/img/2023/07/31/11210140-cxworlds-sunday-781a5715848fea38ee41aa000b541fc3162872c9.jpg?s=900&c=85&f=webp',
    name: 'James Hunt',
    role: 'cyclist',
    rating: 5,
    text: `Alaska's cycling event handler group in one of the world’s harshest riding environments. Many of the hardships they endure.`,
  },
]

// const Review =() => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const { image, name, role, rating, text } = testimonials[index]

  return (
    <>
    <Fade cascade>
    <div className="bg-[#fefced] p-10 rounded-2xl flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto transition-all duration-500">
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 h-[350px] object-cover rounded-2xl"
      />
      <div className="text-center md:text-left space-y-4">
       <Fade  direction='right'  className="text-sm font-semibold text-[#9a954a] uppercase tracking-wide">Customers Review
        <h2 className="text-3xl font-bold text-[#5e573b]">What People Say’s About Us</h2>
        </Fade>
        <div className="text-yellow-500 text-xl">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </div>
        <p className="text-gray-600">{text}</p>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-500 uppercase">{role}</p>
        </div>
        <div className="flex gap-3 justify-center md:justify-start mt-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#b3a858] text-white flex items-center justify-center"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#b3a858] text-white flex items-center justify-center"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
    </Fade>
    </>
  )
}
;

export default Review;
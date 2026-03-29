'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function HomepageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 6);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 6) % 6);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'ArrowRight':
          nextSlide();
          break;
        case ' ':
        case 'Enter':
          event.preventDefault();
          togglePause();
          break;
        case 'Home':
          event.preventDefault();
          goToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          goToSlide(5);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide, togglePause]);

  const slides = [
    {
      id: 0,
      image: '/images/Slider/slider-img-01.jpg',
      title: 'WELCOME TO CINNAMON',
      description: 'Authentic Indian dining with aromatic spices and rich flavors',
      buttonText: 'Reserve a Table'
    },
    {
      id: 1,
      image: '/images/Slider/slider-img-02.jpg',
      title: 'TRADITIONAL INDIAN CUISINE',
      description: 'Experience the diverse flavors of India with our authentic recipes',
      buttonText: 'View Our Menu'
    },
    {
      id: 2,
      image: '/images/Slider/slider-img-03.jpg',
      title: 'FRESH, AUTHENTIC INGREDIENTS',
      description: 'Quality spices and fresh ingredients prepared with passion',
      buttonText: 'Discover Our Story'
    },
    {
      id: 3,
      image: '/images/Slider/slider-img-04.jpg',
      title: 'PERFECT FOR EVERY OCCASION',
      description: 'From family dinners to celebrations, we make every moment special',
      buttonText: 'Book Your Table'
    },
    {
      id: 4,
      image: '/images/Slider/slider-img-05.jpg',
      title: 'WARM INDIAN HOSPITALITY',
      description: 'Where every guest is treated like family',
      buttonText: 'Make a Reservation'
    },
    {
      id: 5,
      image: '/images/Slider/slider-img-06.jpg',
      title: 'EXPERIENCE THE TASTE OF INDIA',
      description: 'Join us for an unforgettable culinary journey',
      buttonText: 'Book Your Table'
    }
  ];

  return (
    <section 
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
      role="region"
      aria-label="Restaurant image carousel"
      aria-roledescription="carousel"
    >
      {/* All slides rendered simultaneously with opacity control */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
          aria-hidden={currentSlide !== index}
        >
          <div 
            className="w-full h-full relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            role="img"
            aria-label={`Restaurant slide ${index + 1}: ${slide.title}`}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 md:px-8">
                <h1 className="font-bold text-white mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base lg:text-lg text-white mb-6 md:mb-8 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <Link 
                  href="/reservations"
                  className="inline-block bg-[#6F1E2D] text-[#ffffff] px-6 md:px-8 py-2.5 md:py-3 hover:bg-[#5a1623] transition-colors text-sm md:text-base lg:text-lg rounded-[0.5rem]"
                  aria-label={`${slide.buttonText} - Navigate to reservations page`}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

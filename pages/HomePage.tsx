import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CourseCategory } from '../types';
import { courseCategories } from '../data/courses';
import { teamMembers } from '../data/teamData';
import { testimonials } from '../data/testData';
import { hiringPartners } from '../data/hiringPartners';
import { galleryImages } from '../data/gallaryData';

interface HomePageProps {
  handleCategorySelect: (category: CourseCategory) => void;
}

const HomePage: React.FC<HomePageProps> = ({ handleCategorySelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const slides = [
    {
      image: '/banner-image/banner-training-min.png',
      mobileImage: '/banner-image/banner-training-square-min.png',
      action: () => handleCategorySelect('training_placement'),
    },
    {
      image: '/banner-image/banner-courses-min.png',
      mobileImage: '/banner-image/banner-courses-square-min.png',
      action: () => navigate('/courses'),
    },
    {
      image: '/banner-image/banner-team-min.png',
      mobileImage: '/banner-image/banner-team-square-min.png',
      action: () => navigate('/team'),
    },
    {
      image: '/banner-image/banner-about-us-min.png',
      mobileImage: '/banner-image/banner-about-us-square-min.png',
      action: () => navigate('/about'),
    },
  ];

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 4000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, nextSlide, resetTimeout]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };



  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add('opacity-100', 'translate-y-0');
            el.classList.remove('opacity-0', 'translate-y-6');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section
        className="mt-0 relative w-full aspect-square md:h-[400px] text-white overflow-hidden -mt-16 group"
        onMouseEnter={() => resetTimeout()}
        onMouseLeave={() => {
          resetTimeout();
          timeoutRef.current = setTimeout(nextSlide, 3000);
        }}
      >
        {/* Background Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
                <source media="(min-width: 768px)" srcSet={slide.image} />
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={slide.action}
                  aria-label={`Slide ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </picture>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 drop-shadow-lg"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white rounded-full w-12 h-12 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 drop-shadow-lg"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 drop-shadow-lg">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>



      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive courses designed to meet your learning goals and
              career aspirations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseCategories.slice(0, 4).map((category, index) => {
              const buttonColorClasses: { [key: string]: string } = {
                'text-purple-500': 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300',
                'text-orange-500': 'text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300',
                'text-green-500': 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300',
                'text-red-500': 'text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300',
                'text-indigo-500': 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300',
                'text-blue-500': 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
              };
              const buttonColors = buttonColorClasses[category.color] || 'text-gray-600 dark:text-gray-400';

              return (
                <div
                  key={category.id}
                  className={`reveal bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-out opacity-0 translate-y-6 border border-transparent ${category.borderColorHover} flex flex-col`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`text-4xl ${category.color} mb-4`}>
                    <i className={category.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                    {category.description}
                  </p>
                  <button
                    onClick={() => handleCategorySelect(category.id)}
                    className={`rounded-button whitespace-nowrap cursor-pointer ${buttonColors} font-semibold mt-auto self-start`}
                  >
                    Learn More <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/courses')}
              className="rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-semibold text-lg transition-colors duration-300"
              aria-label="View all courses"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Why LearnSpire Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Why Choose LearnSpire?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We provide world-class education with innovative teaching methods
              and personalized learning experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="reveal p-8 rounded-lg hover:shadow-2xl transition-all duration-500 ease-out opacity-0 translate-y-6">
              <div className="text-5xl text-green-500 mb-4">
                <i className="fas fa-chalkboard-teacher"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learn from industry professionals with years of real-world
                experience and proven teaching expertise.
              </p>
            </div>
            <div className="reveal p-8 rounded-lg hover:shadow-2xl transition-all duration-500 ease-out opacity-0 translate-y-6" style={{ transitionDelay: '100ms' }}>
              <div className="text-5xl text-blue-600 mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Flexible Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Study at your own pace with 24/7 access to course materials and
                interactive learning modules.
              </p>
            </div>
            <div className="reveal p-8 rounded-lg hover:shadow-2xl transition-all duration-500 ease-out opacity-0 translate-y-6" style={{ transitionDelay: '200ms' }}>
              <div className="text-5xl text-purple-500 mb-4">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Industry Certification
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Earn recognized certificates that boost your career prospects and
                validate your skills.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Hiring Partners Section (New) */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Our Esteemed Hiring Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We collaborate with leading companies to ensure excellent placement opportunities for our students.
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden 
                       before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-16 md:before:w-24 before:bg-gradient-to-r before:from-white dark:before:from-gray-800 before:to-transparent before:content-['']
                       after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-16 md:after:w-24 after:bg-gradient-to-l after:from-white dark:after:from-gray-800 after:to-transparent after:content-['']"
          >
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center py-4" style={{ animationDuration: '40s'}}>
              {[...hiringPartners, ...hiringPartners].map((partner, index) => (
                <div key={index} className="w-40 h-20 md:w-48 md:h-24 mx-6 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Meet Our Team Section (New) */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Committed to your success, our team brings expertise and passion to education.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(0, 4).map((member, index) => ( // Show first 3 team members
              <div
                key={index}
                className="reveal bg-gray-50 dark:bg-gray-700/50 p-8 rounded-lg transition-all duration-500 ease-out opacity-0 translate-y-6 text-center flex flex-col items-center border border-transparent hover:border-green-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-gray-200 dark:border-gray-600"
                  loading="lazy"
                />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 dark:text-green-400 font-medium mb-3">
                  {member.designation}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {member.bio}
                </p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={member.twitterUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`Follow ${member.name} on Twitter`}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors duration-300"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/team')}
              className="rounded-button whitespace-nowrap cursor-pointer bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-semibold text-lg transition-colors duration-300"
              aria-label="View all team members"
            >
              View All
            </button>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hear from learners who transformed their careers with LearnSpire
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden 
                       before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-16 md:before:w-24 before:bg-gradient-to-r before:from-gray-50 dark:before:from-gray-900 before:to-transparent before:content-['']
                       after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-16 md:after:w-24 after:bg-gradient-to-l after:from-gray-50 dark:after:from-gray-900 after:to-transparent after:content-['']"
          >
            <div className="flex mb-5 w-max animate-scroll hover:[animation-play-state:paused]" style={{ animationDuration: '80s' }}>
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="w-80 md:w-96 mx-4 flex-shrink-0 bg-white dark:bg-gray-700/50 p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.course}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "{testimonial.description}"
                  </p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'
                          } ${testimonial.stars % 1 !== 0 && i === Math.floor(testimonial.stars)
                            ? 'fa-star-half-alt'
                            : ''
                          }`}
                      ></i>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pt-15 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Glimpses of LearnSpire
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A vibrant and engaging learning environment designed for success.
            </p>
          </div>
          <div
            className="relative w-full overflow-hidden
                       before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-12 md:before:w-16 before:bg-gradient-to-r before:from-gray-50 dark:before:from-gray-900 before:to-transparent before:content-['']
                       after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-12 md:after:w-16 after:bg-gradient-to-l after:from-gray-50 dark:after:from-gray-900 after:to-transparent after:content-['']"
          >
            <div
              className="flex w-max animate-scroll hover:[animation-play-state:paused]"
              style={{ animationDuration: '150s' }}
            >
              {[...galleryImages, ...galleryImages].map((img, index) => (
                <div key={index} className="w-80 md:w-96 h-56 md:h-64 mx-4 flex-shrink-0">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 scroll-mt-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6 duration-500">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                About LearnSpire
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                LearnSpire is a leading educational platform dedicated to
                empowering learners worldwide with high-quality, accessible, and
                practical education. Founded with the vision of making learning
                engaging and effective, we bridge the gap between traditional
                education and modern industry requirements.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our mission is to inspire and enable individuals to achieve
                their full potential through innovative learning experiences,
                expert instruction, and a supportive community of learners and
                educators.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-500">
                    1,000+
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Courses Available</div>
                </div>
              </div>
            </div>
            <div className="relative reveal opacity-0 translate-y-6 duration-500" style={{ transitionDelay: '200ms' }}>
              <img
                src="/image-gallary/slide-image1.jpeg"
                alt="LearnSpire Campus"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

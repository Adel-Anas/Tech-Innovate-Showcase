'use client'
import ArtWorld from '@/images/ArtWorld.png';
import Dashboard from '@/images/Dashboard.png';
import Foodhub from '@/images/FoodHub.png';
import Rorcars from '@/images/Rorcars.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Projects() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className='project-wrapper' data-aos="fade-in" data-aos-delay="500">
        <div className='project-container'>
          <input type="radio" name="slide" id='c1' className='radio-input'/>
          <label htmlFor="c1" className='project-cards' style={{backgroundImage: `url(${Dashboard.src})`}}>
            <div className='row'>
              <div className='project-icons'>1</div>
              <div className='description'>
                <h4>Drive-Ease Dashboard</h4>
                <p>Optimize your business with the DriveEase Dashboard</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c2' className='radio-input'/>
          <label htmlFor="c2" className='project-cards' style={{backgroundImage: `url(${Rorcars.src})`}}>
            <div className='row'>
              <div className='project-icons'>2</div>
              <div className='description'>
                <h4>RorCars</h4>
                <p>Your go-to for hassle-free car rentals.</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c3'  className='radio-input'/>
          <label htmlFor="c3" className='project-cards'  style={{backgroundImage: `url(${Foodhub.src})`}}>
            <div className='row'>
              <div className='project-icons'>3</div>
              <div className='description'>
                <h4>Food Hub</h4>
                <p>Explore endless culinary possibilities with our online recipe app.</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c4'  className='radio-input'/>
          <label htmlFor="c4" className='project-cards' style={{backgroundImage: `url(${ArtWorld.src})`}}>
            <div className='row'>
              <div className='project-icons'>4</div>
              <div className='description'>
                <h4>Art World</h4>
                <p>Elevate your space with art from our online gallery.</p>
              </div>
            </div>
          </label>

        </div>
      </div>
    </>
  );
}

export default Projects;
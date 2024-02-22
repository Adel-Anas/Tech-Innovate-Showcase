import ArtWorld from '@/images/ArtWorld.png';
import Foodhub from '@/images/FoodHub.png';
import Rorcars from '@/images/Rorcars.png';
import Dashboard from '@/images/Dashboard.png'

function Page() {
  return (
    <>
      <div className='project-wrapper'>
        <div className='project-container'>
          <input type="radio" name="slide" id='c1' className='radio-input'/>
          <label htmlFor="c1" className='project-cards' style={{backgroundImage: `url(${Rorcars.src})`}}>
            <div className='row'>
              <div className='project-icons'>1</div>
              <div className='description'>
                <h4>Winter</h4>
                <p>Winter has so much to offer - creative activities</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c2' className='radio-input'/>
          <label htmlFor="c2" className='project-cards' style={{backgroundImage: `url(${Foodhub.src})`}}>
            <div className='row'>
              <div className='project-icons'>1</div>
              <div className='description'>
                <h4>Digital</h4>
                <p>Gets Better EveryDay</p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c3'  className='radio-input'/>
          <label htmlFor="c3" className='project-cards'  style={{backgroundImage: `url(${ArtWorld.src})`}}>
            <div className='row'>
              <div className='project-icons'>1</div>
              <div className='description'>
                <h4>Globalization</h4>
                <p>Help People all over the world </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id='c4'  className='radio-input'/>
          <label htmlFor="c4" className='project-cards'>
            <div className='row'>
              <div className='project-icons'>1</div>
              <div className='description'>
                <h4>New Technologies</h4>
                <p>Space Engineering becomes more and more powerfull</p>
              </div>
            </div>
          </label>

        </div>
      </div>
    </>
  );
}

export default Page;
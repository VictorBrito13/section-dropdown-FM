import Button from '../../UI-components/Button/Button'
import { sponsors } from '../../assets/sponsors'
import './Home.css'

export default function Home() {
  return (
    <section className='home-container'>
      {/* Intro */}
      <div className='home-presentation-container'>
        <h1>Make <br /> remote work</h1>
        <p>
          Get your team in sync, no matter your location. <br />
          Streamline processes, create team rituals, and <br />
          watch productivity soar.
        </p>
        <Button text='Learn more' cssClasses={['btn-learn-more']}/>
        <div className='sponsors-container'>
          {
            sponsors.map((sponsor, index) => <img src={ sponsor } key={ index } className='sponsor'/>)
          }
        </div>

      </div>
      {/* Image */}
      <div className='home-image'></div>
    </section>
  )
}
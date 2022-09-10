import youtube from './../../assets/img/youtube.png'
import './hero.scss'

function Hero() {
  return (
    <main className="site-hero">
      <div className="container">
        <div className="site-hero__wrapper">

          <div className="site-hero__text">
            <h4 className="site-hero__text-title">
              Biznesingizni keyingi bosqichga
              olib chiqing
            </h4>

            <p className="site-hero__text-paragraph">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>

            <button className="site-hero__btn">Xizmatlar bilan tanishish</button>
          </div>


          <div className="site-hero__image">
            <img src={youtube} alt="Hero img" />
          </div>
        </div>
      </div>


      




    </main>
  )
}



export default Hero
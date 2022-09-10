import './xizmatlar-cards.scss'
import Website from './../../assets/img/web-site-xizmatlar.svg'
import Bot from './../../assets/img/telegram-bot.png'
import Smm from './../../assets/img/smm-xizmatlar.svg'
import Design from './../../assets/img/design-xizmatlar.svg'
import Crm from './../../assets/img/crm-xizmatlar.svg'


function Cards() {
  return (
    <div className="xizmatlar-cards">
      <div className="container">
      <ul className="xizmatlar-cards__list">

  <li className="xizmatlar-cards__item">
    <img className='xizmatlar-cards__img' src={Website} alt="Website" />

    <h4 className='xizmatlar-cards__title'>Vebsayt tuzish</h4>

    <p className="xizmatlar-cards__info">lorem ipsum</p>
  </li>

  <li className="xizmatlar-cards__item">
    <img className='xizmatlar-cards__img' src={Bot} alt="Website" />

    <h4 className='xizmatlar-cards__title'>Telegram Bot</h4>

    <p className="xizmatlar-cards__info">lorem ipsum</p>
  </li>

  <li className="xizmatlar-cards__item">
    <img className='xizmatlar-cards__img' src={Smm} alt="Website" />

    <h4 className='xizmatlar-cards__title'>Smm</h4>

    <p className="xizmatlar-cards__info">lorem ipsum</p>
  </li>

  <li className="xizmatlar-cards__item">
    <img className='xizmatlar-cards__img' src={Design} alt="Website" />

    <h4 className='xizmatlar-cards__title'>Grafik Design</h4>

    <p className="xizmatlar-cards__info">lorem ipsum</p>
  </li>

  <li className="xizmatlar-cards__item">
    <img className='xizmatlar-cards__img' src={Crm} alt="Website" />

    <h4 className='xizmatlar-cards__title'>Crm Xizmatlar</h4>

    <p className="xizmatlar-cards__info">lorem ipsum</p>
  </li>
  </ul>

  <div className="xizmatlar-cards__btn">
  <button>Buyurtama berish</button>
  <a href="#">Xizmatlar sahifasiga o'tish</a>
  </div>
      </div>
    </div>
  )
}

export default Cards



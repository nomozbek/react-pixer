import './qanday-ishlaymiz.scss'
import Talabalar from './../../assets/img/talabalarni-aniqlab.svg'
import Yechimlar from './../../assets/img/bir-necha-yechimlar.svg'
import Vaqt from './../../assets/img/loyiha-vaqt.svg'
import Sifat from './../../assets/img/step-illustration.png'
import Quvvatlash from './../../assets/img/quvvatlash.svg'

function QandayIshlaymiz() {
return (
<div className="qanday-ishlaymiz">
  <div className="container">
    <h2 className="qanday-ishlaymiz__title">
      Biz qanday ishlaymiz?
    </h2>

    <p className="qanday-ishlaymiz__info">
      Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa
      pellentesque in. Vivamus mattis eros at sem pulvinar
    </p>


    <ul className="qanday-ishlaymiz__list">

      <li className="qanday-ishlaymiz__item">
        <img className='qanday-ishlaymiz__item-img' src={Talabalar} alt="Talabalarnu aniqlab" />

    <div className='qanday-ishlaymiz__item-info'>
    <h4 className='qanday-ishlaymiz__item-title'>Talablarni aniqlab chiqamiz</h4>
    <p className='qanday-ishlaymiz__item-subtitle'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
   </div>
      </li>

      <li className="qanday-ishlaymiz__item">
      <div className='qanday-ishlaymiz__item-info'>
    <h4 className='qanday-ishlaymiz__item-title'>Bir necha yechimlarni taklif qilamiz</h4>
    <p className='qanday-ishlaymiz__item-subtitle'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
   </div>


        <img className='qanday-ishlaymiz__item-img' src={Yechimlar} alt="Bir necha yechimlar" />
      </li>


      <li className="qanday-ishlaymiz__item">
        <img className='qanday-ishlaymiz__item-img' src={Vaqt} alt="Vaqt" />

    <div className='qanday-ishlaymiz__item-info'>
    <h4 className='qanday-ishlaymiz__item-title'>Loyiha uchun vaqt belgilaymiz</h4>
    <p className='qanday-ishlaymiz__item-subtitle'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
   </div>
      </li>

      <li className="qanday-ishlaymiz__item">
    <div className='qanday-ishlaymiz__item-info'>
    <h4 className='qanday-ishlaymiz__item-title'>A’lo sifat bilan bajarib topshiramiz</h4>
    <p className='qanday-ishlaymiz__item-subtitle'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
   </div>


   <img className='qanday-ishlaymiz__item-img' src={Sifat} alt="A'lo sifat" />
      </li>


      <li className="qanday-ishlaymiz__item">
      <img className='qanday-ishlaymiz__item-img' src={Quvvatlash} alt="A'lo sifat" />



    <div className='qanday-ishlaymiz__item-info'>
    <h4 className='qanday-ishlaymiz__item-title'>Qo’llab-quvvatlab boramiz</h4>
    <p className='qanday-ishlaymiz__item-subtitle'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
   </div>


  
      </li>
    </ul>


  </div>
</div>
)
}

export default QandayIshlaymiz
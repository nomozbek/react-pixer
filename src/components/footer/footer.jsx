import './footer.scss'



function Footer() {
return (
<footer className='footer'>
  <div className="container">
    <div className="footer__wrapper">
      <ul className="footer__list">
        <li className="footer__item">
          <h3 className=''>Copyright 2020</h3>

          <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin
            massa pellentesque in. Vivamus mattis eros at sem pulvinar tincidunt.</p>

        </li>


        <li className="footer__item">
          <h3>Sayt sahifalari</h3>

          <p>Bosh sahifa</p>
          <p>Xizmatlar</p>
          <p>Portfolio</p>
          <p>Jamoa</p>
          <p>Blog</p>
          <p>Kontaktlar</p>
        </li>


        <li className="footer__item">
            <h3>Biz internetda</h3>

            <p>Telegram</p>
            <p>Facebook</p>
            <p>Instagram</p>
        </li>
      </ul>
    </div>
  </div>
</footer>
)
}


export default Footer
import './buyurtma.scss'


function Buyurtma() {
return (
<div className="buyurtma">
  <div className="container">
    <h2 className='buyurtma__title'>Buyurtma berish</h2>

    <p className="buyurtma__subtitle">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis
      lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>


      <form className="buyurtma__form">
        <input type="text" placeholder='Ismingiz' />

          <input type="text" placeholder='Telefon raqamingiz' />

          <select name="select" id="">
            <option value="xizmat">Xizmat turi</option>
            <option value="something">Something</option>
          </select>

      </form>
  </div>



</div>

)
}

export default Buyurtma
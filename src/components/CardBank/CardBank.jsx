import '../CardBank/CardBank.css'

function CardBank({ name, accountNumber, expirationDate, cvv }) {
    return (
      <div className='container-cardbank'>
        <h2>اطلاعات کارت بانکی</h2>
        <p> نام و نام خانوادگی: {name}</p>
        <p>شماره حساب: {accountNumber}</p>
        <p>تاریخ انقضا: {expirationDate}</p>
        <p>CVV: {cvv}</p>
      </div>
    )
  }
  
  export default CardBank;
  
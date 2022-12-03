import React from 'react'
import visa from '../../../../public/visa.png';
import mastercard from '../../../../public/masterCard.png';

const Order = () => {
  return (
    <div style={{ display: 'grid', rowGap: '1rem' }}>
      <h2>
        Как сделать заказ:
      </h2>
      <ol>
        <li>
          <h3>Войти или зарегистрироваться.</h3>
        </li>
        <li>
          <h3>Выберите товар и добавьте его в корзину.</h3>
        </li>
        <li>
          <h3>Перейдите в корзину и нажмите Оформить заказ.</h3>
        </li>
        <li>
          <h3>Укажите адрес для доставки и выберите Оплатить.</h3>
        </li>
        <li>
          <h3>Заполните данные своей платежной карты, нажмите Оплатить.</h3>
        </li>
        <li>
          <h3>Готово! Поздравляем Вы совершили покупку!</h3>
        </li>
      </ol>
    </div>
  )
}

export default Order
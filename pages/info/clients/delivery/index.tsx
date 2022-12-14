import React from 'react'

const Delivery = () => {
  return (
    <div style={{ display: 'grid', rowGap: '1rem' }}>
      <div>
        <h2>Доставка</h2>
        <h4>Курьерская доставка</h4>
        <span>Курьер позвонит получателю за 10-15 минут до прибытия на адрес и сообщит о приезде в ближайшее время.</span>
      </div>
      <div>
        <h4>Города и сроки курьерской доставки:</h4>
        <ul>
          <li>
            Алматы, Нур-Султан, Караганда, Темиртау — 1-3 дня
          </li>
          <li>
            Актобе, Актау, Атырау, Уральск — 6-8 дней
          </li>
          <li>
            Костанай, Кокшетау, Павлодар, Петропавловск, Семей, Усть-Каменогорск, Шымкент, Тараз, Жезказган, Сатпаев, Кызылорда — 2-5 дней
          </li>
        </ul>
      </div>
      <span>
        Для получения оплаченного заказа необходимо предъявить курьеру любой документ, удостоверяющий личность получателя или продиктовать код получения заказа. Его Вы найдете в разделе "Мои заказы", нажав на номер заказа.
      </span>
    </div>
  )
}

export default Delivery
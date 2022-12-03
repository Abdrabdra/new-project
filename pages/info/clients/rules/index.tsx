import Link from 'next/link'
import React from 'react'

const links = [
  { title: 'Правила размещения информации', link: '/info/clients/rules/1' },
  { title: 'Правила оформления товаров и услуг', link: '/info/clients/rules/2' },
  { title: 'Правила публикации отзывов', link: '/info/clients/rules/3' },
  { title: 'Политика в отношении защиты персональных данных', link: '/info/clients/rules/4' },
]

const index = () => {
  return (
    <div>
      <h2>Правила пользования торговой площадкой</h2>
      <ol>
        {links.map((li, idx) => (
          <li key={idx}>
            <Link href={li.link} passHref>
              <a style={{textDecoration: 'underline'}}>
                <h3>{li.title}</h3>
              </a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default index
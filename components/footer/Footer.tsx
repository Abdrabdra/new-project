import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './_.module.scss';
import instagram from '../../public/icons/instagram.svg';
import youtube from '../../public/icons/youtube.svg';

const forClients = [
  { name: 'Правила пользования торговой площадкой', link: '/info/clients/rules' },
  { name: 'Как сделать заказ', link: '/info/clients/order' },
  { name: 'Способы оплаты', link: '/info/clients/payment' },
  { name: 'Доставка', link: '/info/clients/delivery' },
  { name: 'Возврат товара', link: '/info/clients/return' },
  { name: 'Возврат денежных средств', link: '/info/clients/refund' },
  // { name: 'Пользовательское соглашение', link: '/info/clients/payment' },
]

const forSellers = [
  { name: 'Зарабатывайте на ADU24', link: 'https://services.adu24.com' },
  { name: 'Зарабатывайте на своих услугах', link: 'https://services.adu24.com/service' },
  // { name: 'Условия торговли на ADU24', link: '#' },
]

const ourProjects = [
  { name: 'ADU STUDIO', link: 'https://adu.kz/studio' },
  { name: 'ADU CONSULTING', link: 'https://adu.kz/crm' },
  { name: 'ADU TENDERS', link: 'https://adu.kz/investment' },
]

const adu24 = [
  { name: 'О нас', link: '/info/adu24/about' },
  { name: 'Реквизиты', link: '/info/adu24/requisites' },
  // { name: 'Контакты', link: '/info/adu24/contact' },
  // { name: 'Вакансии', link: '/info/adu24/vacancy' },
]

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <Grid container direction={isMobile ? 'column' : 'row'} spacing={2} className={styles.wrapper}>
      <Grid item xs>
        <Typography variant='h6' color='white' fontWeight='bold'>Покупателям</Typography>
        {forClients.map((item, idx) => (
          <Link href={item.link} passHref key={idx}>
            <a>
              <Typography marginY={'8px'} variant='subtitle2' color='white'>{item.name}</Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs>
        <Typography variant='h6' color='white' fontWeight='bold'>Продавцам</Typography>
        {forSellers.map((item, idx) => (
          <Link href={item.link} passHref key={idx}>
            <a>
              <Typography marginY={'8px'} variant='subtitle2' color='white'>{item.name}</Typography>
            </a>
          </Link>
        ))}
        <Typography variant='h6' color='white' fontWeight='bold'>Наши Проекты</Typography>
        {ourProjects.map((item, idx) => (
          <Link href={item.link} passHref key={idx}>
            <a>
              <Typography marginY={'8px'} variant='subtitle2' color='white'>{item.name}</Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs>
        <Typography variant='h6' color='white' fontWeight='bold'>ADU24</Typography>
        {adu24.map((item, idx) => (
          <Link href={item.link} passHref key={idx}>
            <a>
              <Typography marginY={'8px'} variant='subtitle2' color='white'>{item.name}</Typography>
            </a>
          </Link>
        ))}
      </Grid>
      <Grid item xs>
        <Typography variant='h6' color='white' fontWeight='bold'>Мы в соц сетях</Typography>
        <Stack direction='row' spacing='1rem'>
          <Link
            href='https://instagram.com/_u/adu24_com/'
            passHref
          >
            <a>
              <img
                alt=''
                src={instagram.src}
              />
            </a>
          </Link>
          <Link
            href='https://www.youtube.com/channel/UCZSllqSYnjgJrSzFQuq2kBw/featured'
            passHref
          >
            <a>
              <img
                alt=''
                src={youtube.src}
              />
            </a>
          </Link>
        </Stack>
        <Typography variant='h6' color='white' fontWeight='bold'>Мобильные устройства</Typography>
        <Stack direction='column'>
          <Link
            href='https://play.google.com/store/apps/details?id=com.adu24&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
            passHref
          >
            <a>
              <img
                alt='Доступно в Google Play'
                src='https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png'
                className={styles.marketIcon}
              />
            </a>
          </Link>
          <Link
            href='https://apps.apple.com/us/app/adu24-market/id1592294417?itscg=30200&amp;itsct=apps_box_appicon'
            passHref
          >
            <a>
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ru-ru?size=250x83&amp;releaseDate=1635984000&h=defc736d7e5f25d91d23c45eee5f0ce0"
                alt="Download on the App Store"
                className={styles.appStoreIcon}
              />
            </a>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Footer
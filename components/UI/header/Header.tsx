import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CategoryMenu from '../../CategoryMenu';
import { useTypedSelector } from '../../../hook/useTypedSelector';
import Button from '../button/Button';

// styles
import styles from './Header.module.scss';
import Drawer from '../drawer/Drawer';
import CategoryList from '../../CategoryList';

const Header = () => {
  const router = useRouter();
  const { isAuth } = useTypedSelector(state => state.auth);
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => router.push(`/search?search=${searchText}`);

  const [isMobileSearch, setIsMobileSearch] = useState(false);
  const [mobileDrawer, setMobileDrawer] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.mobile}>
        <Button startIcon='/icons/menu.svg' onClick={() => setMobileDrawer(state => !state)} />
        <Drawer open={mobileDrawer}>
          <CategoryList />
        </Drawer>
      </div>
      <Link href="/" passHref>
        <Image src="/adu.svg" alt="ADU24 Logo" width={120} height={30} />
      </Link>
      <CategoryMenu />
      <input
        placeholder='Поиск товара'
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className={styles.desktopSearch}
      />
      {isMobileSearch &&
        <input
          placeholder='Поиск товара'
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      }
      {isMobileSearch ?
        <div style={{ marginLeft: 'auto' }}>
          <Button onClick={() => setIsMobileSearch(false)}>
            <img src='/icons/close.svg' />
          </Button>
        </div>
        :
        <div className={styles.mobile} style={{ marginLeft: 'auto' }}>
          <Button startIcon='/icons/search.svg' onClick={() => setIsMobileSearch(true)} />
        </div>
      }
      <div className={styles.desktop}>
        <Link href={isAuth ? '/basket' : '/auth/login'} passHref>
          <Button startIcon='/icons/basket.svg'>Корзина</Button>
        </Link>
        {isAuth ?
          <Link href={{ pathname: '/profile', query: { from: router.asPath } }} passHref>
            <Button startIcon='/icons/profile.svg'>Мой профиль</Button>
          </Link>
          :
          <Link href={{ pathname: '/auth/login', query: { from: router.asPath } }} passHref>
            <Button startIcon='/icons/profile.svg'>Войти</Button>
          </Link>
        }
      </div>
    </header>
  )
}

export default Header
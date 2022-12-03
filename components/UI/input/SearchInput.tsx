import { useRouter } from 'next/router';
import { ChangeEvent, FC, KeyboardEvent, useEffect, useState } from 'react';
import styles from './SearchInput.module.scss';

interface Props {
  startIcon?: string
  endIcon?: string
}

const SearchInput: FC<Props> = ({ startIcon, endIcon }) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  }
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (searchText.trim().length > 0 && e.key === 'Enter') {
      router.push(`/search?search=${searchText}`)
    }
  }

  const { asPath } = router;
  useEffect(() => {
    setSearchText('')
  }, [asPath])
  return (
    <div className={styles.searchInput}>
      {startIcon && <img src='/icons/startIcon' className={styles.icon} />}
      <img src='/icons/search-gray.svg' className={styles.icon} />
      <input
        placeholder='Поиск товара'
        id='search-field'
        name='search-field'
        onKeyDown={handleSearch}
        value={searchText}
        onChange={handleChangeSearchText}
        className={styles.search}
      />
      {endIcon && <img src='/icons/startIcon' className={styles.icon} />}
    </div>
  )
}

export default SearchInput
import { FC } from 'react';
import { IProductCard } from '../../types/IProduct';
import styles from './ProductCard.module.scss';
interface Props {
  product: IProductCard
}
const ProductCard: FC<Props> = ({product}) => {
  const {} = product;
  return (
    <div>

    </div>
  )
}

export default ProductCard
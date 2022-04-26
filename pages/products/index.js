import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const ProductList = () => (
	<main className={styles.main}>
		<ul>
			{[1, 2, 3, 4].map((item) => (
				<li key={`pdt-link-${item}`}>
					<Link href={`/products/${item}`} replace={item === 3}>
						<a>Product {item} </a>
					</Link>
				</li>
			))}
		</ul>
	</main>
);

export default ProductList;

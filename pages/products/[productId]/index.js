import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

const ProductDetails = () => {
	const router = useRouter();
	const { productId } = router.query;

	return (
		<main className={styles.main}>
			<h3>Product details page - {productId}</h3>
		</main>
	);
};

export default ProductDetails;

import { useRouter } from 'next/router';
import styles from '../../../../styles/Home.module.css';

const ProductReview = () => {
	const router = useRouter();
	const { productId, reviewId } = router.query;

	return (
		<main className={styles.main}>
			<h3>
				Review for - {reviewId} associated with Product - {productId}
			</h3>
		</main>
	);
};

export default ProductReview;

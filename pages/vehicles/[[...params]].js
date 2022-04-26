import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const VehiclesFeatures = () => {
	const router = useRouter();
	const possibleRoutesParams = router.query.params;
	console.log(possibleRoutesParams);
	return (
		<main className={styles.main}>
			<h2>This is Vehicles page</h2>
		</main>
	);
};

export default VehiclesFeatures;

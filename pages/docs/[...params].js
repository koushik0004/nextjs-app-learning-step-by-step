import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

const DocsFeature = () => {
	const router = useRouter();
	const possibleRoutesParams = router.query.params;
	console.log(possibleRoutesParams);
	return (
		<main className={styles.main}>
			<h2>This is Docs page</h2>
			{possibleRoutesParams?.length && (
				<>
					<h3>We able to see following</h3>
					<h4>
						{possibleRoutesParams.length === 1
							? `Single item appears - ${possibleRoutesParams[0]}`
							: `items appears as ${possibleRoutesParams.join(' in ')}`}
					</h4>
				</>
			)}
		</main>
	);
};

export default DocsFeature;

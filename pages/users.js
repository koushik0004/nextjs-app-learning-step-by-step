import Link from 'next/link';
import { User } from '../components';
import styles from '../styles/Home.module.css';

const Users = ({ users }) => {
	return (
		<div className={styles.container}>
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<main className={styles.main}>
				<h2>User list page</h2>
				<div className={styles.grid}>
					{users.map((user) => (
						<User {...user} key={`user-${user.id}`} />
					))}
				</div>
			</main>
		</div>
	);
};
export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	/**
	 * this data will be visible in system console
	 * since this whole stuff is generating at server
	 * side thus page will be rendered with this
	 * preloaded data
	 */
	// console.log(data);

	/**
	 * return is required for getStaticProps function
	 * and following is the object format
	 */
	return {
		props: {
			users: data,
		},
	};
};

export default Users;

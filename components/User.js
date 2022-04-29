import styles from '../styles/Home.module.css';

export const User = ({ id, name, address, email, username, phone }) => (
	<div className={styles.grid}>
		<section className={styles.card} data-testid={`user-${id}`}>
			<h3>{name}</h3>
			<h4>
				UserName: {username} <br /> ({email})
			</h4>
			<div className="user-address">
				{Object.keys(address)
					.slice(0, Object.keys(address).length - 2)
					.map((item, index) => (
						<p key={`user-address-${index}`}>{address[item]}</p>
					))}
			</div>
			<h4>Contact info: {phone}</h4>
		</section>
	</div>
);

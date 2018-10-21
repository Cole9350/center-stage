import { title } from 'assets/jss/material-kit-react.jsx';

const productStyle = {
	section: {
		padding: '40px 0',
		textAlign: 'center',
	},
	title: {
		...title,
		marginBottom: '1rem',
		marginTop: '30px',
		minHeight: '32px',
		textDecoration: 'none',
	},
	description: {
		color: '#999',
	},
	listcontainer: {
		textAlign: 'center',
		width: 'auto',
		color: '#999',
		display: 'flex',
	},
	ul: {
		textAlign: 'left',
		margin: '0',
	},
};

export default productStyle;

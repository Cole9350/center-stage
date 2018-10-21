import { container, title } from 'assets/jss/material-kit-react.jsx';

const carouselStyle = {
	section: {
		padding: '40px 0',
	},
	container,
	marginAuto: {
		marginLeft: 'auto !important',
		marginRight: 'auto !important',
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
};

export default carouselStyle;

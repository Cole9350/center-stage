/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx';

function Footer({ ...props }) {
	const { classes, whiteFont } = props;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>
					<List className={classes.list}>
						<ListItem className={classes.inlineBlock}>
							<a href="http://centerstagestudios.net/" className={classes.block} target="_blank">
								Center Stage
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a
								href="https://www.facebook.com/Center-Stage-Dance-Academy-125698350872121/"
								className={classes.block}
								target="_blank"
							>
								Facebook <i className={classes.socialIcons + ' fab fa-facebook'} />
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a href="https://twitter.com/#!/CSDAMass" className={classes.block} target="_blank">
								Twitter <i className={classes.socialIcons + ' fab fa-twitter'} />
							</a>
						</ListItem>
						<ListItem className={classes.inlineBlock}>
							<a href="https://www.instagram.com" className={classes.block} target="_blank">
								Instagram <i className={classes.socialIcons + ' fab fa-instagram'} />
							</a>
						</ListItem>
					</List>
				</div>
				<div className={classes.right}>
					&copy; {1900 + new Date().getYear()} , made by Center Stage Outreach Team, Inc.
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
	whiteFont: PropTypes.bool,
};

export default withStyles(footerStyle)(Footer);

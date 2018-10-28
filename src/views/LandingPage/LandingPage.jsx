import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
//import Button from 'components/CustomButtons/Button.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

// Sections for this page
import ProductSection from './Sections/ProductSection.jsx';
//import TeamSection from './Sections/TeamSection.jsx';
//import WorkSection from './Sections/WorkSection.jsx';
import SectionCarousel from '../Components/Sections/SectionCarousel';

const dashboardRoutes = [];

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					color="transparent"
					routes={dashboardRoutes}
					brand="Center Stage Outreach"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{ height: 600, color: 'white' }}
					{...rest}
				/>
				<Parallax filter image={require('assets/img/CSDA-Outreach-Logo.jpg')}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<h1 className={classes.title}>Dreams Do Come True.</h1>
								<h4 className={classes.subtitle}>
									The Center Stage "Outreach Team" was created to bring the art of dance to everyone
									in the community. The "Outreach Team" is comprised of specially trained students and
									teachers who donate their time for this unique cause.
								</h4>
								<br />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<SectionCarousel />
						<ProductSection />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);

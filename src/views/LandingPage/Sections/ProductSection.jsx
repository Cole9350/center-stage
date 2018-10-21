import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						<h2 className={classes.title}>We provide education, instruction and performances for..</h2>

						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.listcontainer}>
									<ul className={classes.ul}>
										<li>Benefits</li>
										<li>Charities</li>
										<li>Church Festivals</li>
										<li>Arts Enrichment Programs</li>
										<li>Public and Private Schools</li>
										<li>The "Girl Scouts of America"</li>
										<li>Public Libraries</li>
										<li>”Walk For A Cure”</li>
										<li>Nursing Homes</li>
									</ul>
								</div>
							</GridItem>
							<GridItem xs={12} sm={12} md={6}>
								<div className={classes.listcontainer}>
									<ul className={classes.ul}>
										<li>"Dance for a Cure"</li>
										<li>The Plymouth Cultural Council</li>
										<li>"Dancing With the Angels"</li>
										<li>Plymouth Philharmonic</li>
										<li>Parades</li>
										<li>Exhibitions</li>
										<li>“The Jerry Lewis Telethon”</li>
										<li>The Special Needs Community</li>
									</ul>
								</div>
							</GridItem>
						</GridContainer>
						<h5 className={classes.description}>
							We perform yearly in the Boston Celtics pre-game show and biannually on board Norwegian
							Cruise Lines and in Bermuda as guests of The Corporation of St. George in their Market Night
							Festival, and Royal Naval Nights. Center Stage Company members are regional and national
							award winners, scholarship recipients and title holders. Our goal is to educate, entertain,
							enlighten, and bring the joy of movement to children and adults through our love for the
							arts.
						</h5>
					</GridItem>
				</GridContainer>
				{/*			<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Free Chat"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={Chat}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Verified Users"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={VerifiedUser}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Fingerprint"
								description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div> */}
			</div>
		);
	}
}

export default withStyles(productStyle)(ProductSection);

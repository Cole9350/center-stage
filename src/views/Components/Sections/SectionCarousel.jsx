import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import carouselStyle from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx';
import image1 from 'assets/img/web/IMG_9890.jpg';
import image2 from 'assets/img/web/IMG_9911.jpg';
import image3 from 'assets/img/web/IMG_9925.jpg';
import image4 from 'assets/img/web/IMG_9931.jpg';
import image5 from 'assets/img/web/IMG_9936.jpg';
import image6 from 'assets/img/web/IMG_9942.jpg';
import image7 from 'assets/img/web/IMG_9950.jpg';
import image8 from 'assets/img/web/IMG_9963.jpg';
import image9 from 'assets/img/web/IMG_9975.jpg';

class SectionCarousel extends React.Component {
	render() {
		const { classes } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
		};
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
							<h1 className={classes.title}>Meet the Members</h1>
							<h4 className={classes.description}>Outreach Team 2018-2019</h4>
							<Card carousel>
								<Carousel {...settings}>
									<div>
										<img src={image1} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image2} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image3} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image4} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image5} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image6} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image7} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image8} alt="" className="slick-image" />
									</div>
									<div>
										<img src={image9} alt="" className="slick-image" />
									</div>
								</Carousel>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(carouselStyle)(SectionCarousel);

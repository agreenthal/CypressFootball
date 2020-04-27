import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import image1 from '../../Images/header1.png';
import image2 from '../../Images/header3.png';
import image3 from '../../Images/header4.png';
import image4 from '../../Images/header6.png';
import image5 from '../../Images/header7.png';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    img: {
        height: '150px',
        width: '200px',
        display: 'block',
        float: 'left',
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(2)
    },
    news: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(2)
    }
}));


const CarouselPage = () => {
    const classes = useStyles();
    return (
        <MDBContainer>
            <MDBCarousel
                activeItem={1}
                length={4}
                showControls={true}
                showIndicators={false}
                className="z-depth-1"
                slide
            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image1}
                                alt="First slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image2}
                                alt="Second slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image3}
                                alt="Third slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="4">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image4}
                                alt="Fourth slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="5">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={image5}
                                alt="Fifth slide"
                            />
                        </MDBView>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
            <br />
            <Paper elevation={3} className={classes.news}>
                <img className={classes.img} src="https://www.ocregister.com/wp-content/uploads/2020/02/OCR-L-HSFB-CYPRESS-1123.006.kg_-1.jpg?w=750" alt="newsphoto"></img>
                <h1 style={{ fontSize: '16pt' }}><a href="https://www.ocregister.com/2020/02/03/all-county-running-back-hurtado-commits-to-army/">All-Orange County running back Isaac Hurtado of Cypress commits to Army</a></h1>
                <p style={{ fontSize: '10pt' }}>Cypress senior running Isaac Hurtado, Orange County’s leading rusher in 2019, will sign with Army on Wednesday. Hurtado (6-3, 210) was the 2019 CIF-Southern Section Division 7 offensive player of the year and was an All-Orange County first team selection. He rushed for 2,631 yards and 37 touchdowns. He also had 25 receptions, six of them for touchdowns. The Centurions finished 13-1. West Point athletics recruits do not sign letters of intent. As Army coach Jeff Monken explained, “While our recruits are not signing letters of intent, they are signing a certificate of commitment to attend the U.S. Military Academy.”</p>
            </Paper>
            <Paper elevation={3} className={classes.news}>
                <img className={classes.img} src="https://www.ocregister.com/wp-content/uploads/2019/11/OCR-L-HSFB-CYPRESS-1123.007.kg_-2.jpg?w=799" alt="newsphoto"></img>
                <h1 style={{ fontSize: '16pt' }}><a href="https://www.ocregister.com/2019/11/22/hurtado-does-it-all-at-the-end-lifting-cypress-past-serrano-and-into-division-7-title-game/">Hurtado does it all at the end, lifting Cypress past Serrano and into Division 7 title game</a></h1>
                <p style={{ fontSize: '10pt' }}>Isaac Hurtado was not going to be denied. Moments after shaking off an ankle injury to score the go-ahead touchdown for Cypress, Hurtado tackled Serrano quarterback Parker Chaffee on fourth down in the final seconds to preserve the 26-21 victory in the CIF-SS Division 7 semifinal at Western High on Friday night. The Centurions (13-0) advanced to their first section final since 2007. They will have a home game against Temecula Valley on Nov. 29 or Nov. 30.</p>
            </Paper>
        </MDBContainer>
    );
}

export default CarouselPage;
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
    "mdbreact";
import image1 from '../../Images/header1.png';
import image2 from '../../Images/header3.png';
import image3 from '../../Images/header4.png';
import image4 from '../../Images/header6.png';
import image5 from '../../Images/header7.png';



const CarouselPage = () => {
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
        </MDBContainer>
    );
}

export default CarouselPage;
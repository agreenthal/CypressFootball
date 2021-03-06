import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        border: '2px red solid',
        backgroundColor: '#f38011',
        color: '#fafafa',
        top: theme.spacing(5),
        paddingTop: theme.spacing(2)
    }
}));


const FooterPage = () => {
    const classes = useStyles();
    return (
        <MDBFooter className={classes.root} class="font-small pt-4 mt-3">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <p>
                            Welcome to the home of Cypress Centurion Football.
                        </p>
                    </MDBCol>
                    <MDBCol md="6">
                        <ul>
                            <li className="list-#fafafa">
                                <a href="#!">Cypress High School</a>
                            </li>
                            <li className="list-#fafafa">
                                <a href="#!">CIF-SS</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-2">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Adam Greenthal
                </MDBContainer>
            </div>
        </MDBFooter >
    );
}

export default FooterPage;
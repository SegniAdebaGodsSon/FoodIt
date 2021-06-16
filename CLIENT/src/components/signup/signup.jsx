import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardColumns, CardGroup, CardDeck, CardLink, CardHeader, CardFooter, Button, Row, Col
} from 'reactstrap';
import { MDBInput } from "mdbreact";

import img7 from './bg2.png';
import { Redirect } from 'react-router-dom';


function SignUpHandler(e) {
    e.preventDefault();
    window.location.href = "http://localhost:3000/y2bmovies#/ui-components/starter";
}

const SignUp = () => {

    return (
    <div>
        <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 1}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': 'RGBA(0,0,0,0)',
                    'borderColor': 'RGBA(0,0,0,0)',
                    'margin':'4.7rem'
                }} >
                    <CardImg width="100%" alt="" />
                    <CardImgOverlay>
                        <CardTitle tag="h1"></CardTitle>
                        <CardText></CardText>
                        <form onSubmit={SignUpHandler}>
                        </form>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 4}}>
            <Card inverse className="text-center">
                    <CardImg width="100%" src={img7} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle tag="h1">Sign Up</CardTitle>
                        <CardText>Join the Community!</CardText>
                        <form onSubmit={SignUpHandler}>
                            <MDBInput hint="Fullname" type="text" />
                            <MDBInput hint="Username" type="text" />
                            <MDBInput hint="Email" type="email" />
                            <MDBInput hint="Password" type="password" />
                            <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                            <Button className="btn" color="info" onclick={SignUpHandler}> SIGN UP </Button>
                        </form>
                        <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                        <a href="http://localhost:3000/y2bmovies#/signin/"><CardTitle tag="h4">Already have an account?</CardTitle></a>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    </div>
    );
}

export default SignUp;

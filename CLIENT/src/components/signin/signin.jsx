import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, CardColumns, CardGroup, CardDeck, CardLink, CardHeader, CardFooter, Button, Row, Col
} from 'reactstrap';
import { MDBInput } from "mdbreact";
import img7 from './bg2.png';
import { IndexLinkContainer } from 'react-router-bootstrap';
// import axios from 'axios'


function SignInHandler(e) {
    e.preventDefault();
    window.location.href = "http://localhost:3000/y2bmovies#/ui-components/starter";
    sessionStorage.userId = 1;
}

const divStyle = {
    color: 'blue',
    postition: "absolute",
    overflow: "visible"
  };

const SignIn = () => {
    // const [user, setUser] = useState("")
    // const [message, setMessage] = useState("")

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:5000/api')
    //           .then(res => {
    //               console.log(res);
    //           })
    //           .catch(err => {
    //               console.log(err);
    //           })
    // })

    return (
    <div style={divStyle}>
                <Row>
            <Col sm={{'offset': 4, 'order': 2, 'size': 3}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': 'RGBA(0,0,0,0)',
                    'borderColor': 'RGBA(0,0,0,0)',
                    margin:'6.7rem'
                }} >
                    <CardImg width="100%" alt="" />
                    <CardImgOverlay>
                        <CardTitle tag="h1"></CardTitle>
                        <CardText></CardText>
                        <form onSubmit={SignInHandler}>
                        </form>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
        <Row>
            <col />
            <Col sm={{'offset': 4, 'order': 2, 'size': 4}}>
            <Card inverse className="text-center" style={{
                    'backgroundColor': '#333',
                    'borderColor': '#333',
                    'marginLeft': '4rem',
                }} >
                    <CardImg width="100%" src={img7} alt="Card image cap" />
                    <CardImgOverlay>
                   
                        <CardTitle tag="h1"style={{'color':'rgba(1,1,1,1)'}}>Sign In</CardTitle>
                        <CardText style={{'color':'rgba(1,1,1,1)'}}>We've Missed You!</CardText>
                        <form onSubmit={SignInHandler} >
                            <MDBInput hint="Email" type="email" />
                            <MDBInput hint="Password" type="password" />
                            <CardTitle tag="h6" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                            <Button className="btn" color="info" onclick={SignInHandler}> Sign In </Button>
                        </form>
                        <CardTitle tag="h3" style={{'color':'rgba(0,0,0,0)'}}> . </CardTitle> 
                        <a ><CardTitle tag="h4">Don't have an account yet?</CardTitle></a>
                    </CardImgOverlay>
                </Card>
            </Col>
        </Row>
    </div>
    );
}

export default SignIn;

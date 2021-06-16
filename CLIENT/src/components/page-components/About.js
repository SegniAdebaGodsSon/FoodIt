import classes from './About.module.css'
import {  Row, Col, Image, Container } from 'react-bootstrap';
function About() {
    return (
        <section>
            <div className={["jumbotron jumbotron-fluid text-light ", classes.jumbo].join("")}>
                <div className="container" style={{textAlign:'center'}}>
                    <h1 className={"display-1"} style={{marginTop:'1em'}} >Welcome to FoodIt</h1>
                    <p className="lead">Cook your favorite dishes fast and easy using our highly rated recipes.</p>
                 </div>
            </div>

            <Container style={{marginTop:'3em', marginBottom:'3em'}}>
                <Row style={{marginTop:'2em', marginBottom:'2em'}}>
                    <Col>
                        <Image src={'https://cdn.pixabay.com/photo/2014/08/24/06/04/fruit-426002_1280.jpg'} style={{height:'20em'}} rounded />
                    </Col>
                    <Col>
                        <h1>Quality</h1>
                        <p>Our recipes are one of the best resources out there to get your favorite dishes' recipes. We rank top 3 in the country for providing recipe informations to our loyal customers for free.</p>
                        <p>The quality our products is ensured by professionals and are highly rated by customers all over the world.</p>

                    </Col>
                </Row>

                <Row style={{marginTop:'2em', marginBottom:'2em'}}>
                    <Col>
                        <h1>Easy to follow</h1>
                        <p>Our recipe insructions are very easy and very clear to follow. So that anyone, with no restriction can use our recipes to be a better cook.</p>
                        <p>We have recieved many postive reviews from our loyal customers for our clear and easy to follow instruction.</p>
                    </Col>
                    <Col>
                        <Image src={'https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_1280.jpg'} style={{height:'20em'}} rounded />
                    </Col>
                </Row>

                <Row style={{marginTop:'2em', marginBottom:'2em'}}>
                    <Col>
                        <Image src={'https://cdn.pixabay.com/photo/2014/04/11/13/26/tomatoes-321671_1280.jpg'} style={{height:'20em'}} rounded />
                    </Col>
                    <Col>
                        <h1>Tired of expensive and fancy ingredients?</h1>
                        <p>Most of recipe websites or recipe manuals mostly use expensive and not easily gettable ingredients in their recipes and that's a huge problem.</p>
                        <p>And that's where our website comes in, all our foods are made with simple and easily accessible ingredients for our customers.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About

import { Modal, Row, Col, Container, Image } from 'react-bootstrap'
import { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const URL_PATCH = ``;

function RecipeInfoModal(props) {
    const [ratingStars, setRatingStars] = useState({rating: 0})

    function updateRatingHandler(){
        fetch(`${URL_PATCH}/${props.id}`, 
        {
            method: 'PATCH',
            body: JSON.stringify({rating: ratingStars}),
            headers: {'Content-type': 'application/json; charset=UTF-8'}})
            .then(response => response.json())
            .then(json => console.log(json))
    }

    function onStarClick(nextValue, prevValue, name) {
        setRatingStars({rating: nextValue});
        updateRatingHandler();
    }
    return (
        <Modal
            size="lg"
            show={props.show}
            onHide={() => props.setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    <h1>{props.title}</h1>
                </Modal.Title>
            </Modal.Header>
            <Container>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={props.image} thumbnail fluid/>
                            </Col>
                            <Col>
                                <h2>Description</h2>
                                <p>{props.description}</p>
                            </Col>
                        </Row>
    
                        <Row>
                            <h2>Directions</h2>
                            <p>{props.recipe}</p>
                        </Row>

                        <Row>
                            
                        </Row>
                        <Row style={{ fontSize:'1.4em'}}>
                            <Col sm={8}>
                                <p>Rating: {props.rating} out of {props.ratingCount}</p>
                            </Col>
                            <Col sm={4} >
                                
                                    <div style={{fontSize:'1.5em'}}>
                                        <p style={{fontSize:'0.6em', marginBottom:'-0.9em'}}>Rate this: </p>
                                        <StarRatingComponent
                                            name="rateIngredient" 
                                            starCount={5}
                                            value={ratingStars.rating}
                                            onStarClick={onStarClick}
                                        />
                                     </div>
                               
                                    
                              
                                
                            </Col>
                            
                        </Row>
                    </Container>
                
                
                </Modal.Body>
            </Container>
      </Modal>
    )
}

export default RecipeInfoModal

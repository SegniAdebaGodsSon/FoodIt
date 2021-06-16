import { Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useState } from "react";
import classes from './Post.module.css'
import PostModal from './PostModal';

const userId = sessionStorage.userId;
const URL_POSTS = `http://127.0.0.1:5000/api/${userId}/Recipes/`;

function Post(props) {
    const [ showModal, setShowModal ] = useState(false);

    function deleteClickHandler(){
        setShowModal(true);
    }

    function deleteHandler(){
        fetch(URL_POSTS + props.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: null
        })
        .then(response => {
            return response.json( )
        })
        .then(data => 
            console.log(data) 
        );
    }

    return (
        <li className={classes.item}>
            <Card className={classes.card}>
                <Card.Header>
                    <h2>{props.title}</h2>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={4}>
                            <Image src={props.image} style={{height:'auto', width:'100%', marginTop:'10%'}}>

                            </Image>
                            <Button style={{marginBottom:'-10%'}}variant="danger" onClick={deleteClickHandler}>Delete</Button>
                        </Col>

                        <Col sm={8}>
                            <h3>Description</h3>
                            <p>{props.description}</p>
                            <br/>
                            <h3>Instructions</h3>
                            <p>{props.recipe}</p>
                            <br/>
                            <p>Rating {props.rating} out of {props.ratingCount} votes</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {showModal && <PostModal delete={deleteHandler} show={showModal} setShow={setShowModal}/>}
        </li>
    )
}

export default Post

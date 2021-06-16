
import {useState} from 'react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap'
import classes from './RecipeItem.module.css'
import RecipeInfoModal from './RecipeInfoModal'

function RecipeItem(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const seeMoreHandler = () => setModalIsOpen(true);
    const onModalHideHandler = () => setModalIsOpen(false);

    let badgeValue = 'badge-danger';
    if(props.rating >= 4) 
        badgeValue = 'badge-success'
    else if(props.rating === 3) 
        badgeValue = 'badge-warning'


    return (
        
            <li className={classes.item}>
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description.substr(0, 100)} ...
                        </Card.Text>
                        <Row>
                            <Col sm={9}>
                                <Button variant="dark" onClick={seeMoreHandler} className='text-light'>See More</Button>
                            </Col>
                            <Col sm={3}>
                                <span className={["badge badge-pill ", badgeValue].join("")} >{props.rating}</span>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {
                modalIsOpen 
                 && 
                <RecipeInfoModal 
                    show={modalIsOpen} 
                    setShow = {onModalHideHandler} 
                    title={props.title} 
                    description={props.description} 
                    recipe={props.recipe} 
                    rating={props.rating}
                    ratingCount={props.ratingCount}
                    image={props.image}
                    />
                }
            </li>
            
            
    )
}

export default RecipeItem

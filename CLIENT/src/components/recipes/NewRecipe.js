import React from 'react'
import { Container, Form, Button, Card,      } from 'react-bootstrap'
import classes from './NewRecipe.module.css'
import { useRef } from 'react'


function NewRecipe(props) {
        const nameInputRef = useRef();
        const imageUrlInputRef = useRef();
        const descriptionInputRef = useRef();
        const instructionsInputRef = useRef();

       

        function formSubmitHandler(event){
            event.preventDefault();
            const formData = {
                name: nameInputRef.current.value,
                image: imageUrlInputRef.current.value,
                description: descriptionInputRef.current.value,
                instruction: instructionsInputRef.current.value
            }
            props.onAddRecipe(formData);
        }

    return (
        <Container>
            
           <Card className={classes.card} border="warning" >
               <Card.Body>
                <Form onSubmit={formSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recipe Name</Form.Label>
                        <Form.Control type="text" placeholder="Recipe Name" required ref={nameInputRef}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formImageUrl">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control type="url" placeholder="Image Url" required ref={imageUrlInputRef}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        
                        <Form.Control
                            as="textarea"
                            placeholder="Enter decription here ... "
                            style={{ height: '100px' }}
                            required
                            ref={descriptionInputRef}
                        />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formInstructions">
                        <Form.Label>Instructions</Form.Label>
                        
                        <Form.Control
                            as="textarea"
                            placeholder="Enter instructions here ... "
                            style={{ height: '100px' }}
                            required
                            ref={instructionsInputRef}
                        />
                        
                    </Form.Group>


                    <Button variant="secondary" type="submit" >
                        Submit
                    </Button>

                </Form>

               </Card.Body>
           </Card>
        </Container>
    )
}

export default NewRecipe

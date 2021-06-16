import { Form, Col, Button } from 'react-bootstrap'
import { useRef } from 'react'
function Search(props){
    const searchBoxRef = useRef();
    function onSubmitHandler(event){
        event.preventDefault();
        props.search(searchBoxRef.current.value);
    }

    return (
        <Form style={{width:'100%'}} onSubmit={onSubmitHandler}>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                    Keyword
                </Form.Label>
                <Form.Control ref={searchBoxRef}
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="search for recipe"
                />
                </Col>
            
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Search
                </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Search
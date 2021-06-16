import { Modal, Button } from 'react-bootstrap'

function PostModal(props) {
    
    function deleteModalDeleteClickHandler(){
        props.setShow(false);
        props.delete(); 
    }

    function deleteModalCancelClickHandler(){
        props.setShow(false);
    }
    

    return (
        <Modal
            size="md"
            show={props.show}
            onHide={() => props.setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
            <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Are you sure you want to delete this post?</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={deleteModalCancelClickHandler}>Close</Button>
            <Button variant="danger" onClick={deleteModalDeleteClickHandler}>Delete</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default PostModal

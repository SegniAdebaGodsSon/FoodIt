import { Container,  Image, Row, Col, ListGroup } from 'react-bootstrap'
import classes from './MainFooter.module.css'
import { useLocation } from 'react-router-dom';
import 'bootstrap'


function MainFooter() {
    const location = useLocation();
    if(location.pathname === '/auth') return <></>
    
    return (
        <footer className="bg-dark text-light">
            <Container className={'py-4'}>
                <Row>
                    <Col md={2}>
                        
                    </Col>
                    <Col md={2} sm={1} >
                        <Image src="https://image.flaticon.com/icons/svg/259/259171.svg" fluid height={'130em'} width={'130em'}/>
                    </Col>

                    <Col md={4} sm={1} >
                        <h4>Developers</h4>
                        <ul className={classes.list} >
                            <div className='text-secondary'>
                                <li>Kaleab G.</li>
                                <li>Meti</li>
                                <li>Eden</li>
                                <li>Surafel T.</li>
                                <li>Segni A.</li>
                            </div>
                        </ul>
                    </Col>

                    <Col md={4} sm={1}>
                        <h4>Links</h4>
                            <ul className={classes.list} >
                                <div className='text-secondary'>
                                    <li>facebook</li>
                                    <li>instagram</li>
                                    <li>twitter</li>
                                    <li>github</li>
                                    <li>LinkdIn</li>
                                </div>
                            </ul>
                    </Col>

                </Row>

                <Row className='text-secondary'>
                    <Col>
                        <p style={{textAlign: 'right'}}>privacy & terms</p>
                    </Col>
                    <Col >
                        <p style={{textAlign: 'left'}}>Copyright &#169; reserved</p>
                    </Col>
                </Row> 
            </Container>
        </footer>
    )
}

export default MainFooter

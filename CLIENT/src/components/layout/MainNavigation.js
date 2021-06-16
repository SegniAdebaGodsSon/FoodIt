import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { useLocation } from 'react-router-dom';

function MainNavigation() {
    const location = useLocation();
    if(location.pathname === '/auth') return <></>

    return (
        <header className={'fixed-top'}>
            
            
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    
                    
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>
                        <img alt="" src="https://image.flaticon.com/icons/svg/259/259171.svg" width="30" height="30" className="d-inline-block align-top" />{' '}
                        FoodIt
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <IndexLinkContainer to='/'>
                            <Nav.Link>Explore</Nav.Link>
                        </IndexLinkContainer>

                        <LinkContainer to='/new-recipe'>
                            <Nav.Link>Add Recipe</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    <Nav>
                        <LinkContainer to='/about-us'>
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>

                        <NavDropdown title="Profile" id="collasible-nav-dropdown">

                            <LinkContainer to='/my-posts'>
                                <NavDropdown.Item >My Posts</NavDropdown.Item>
                            </LinkContainer>

                            <NavDropdown.Divider />

                            <LinkContainer to='/auth'>
                                <NavDropdown.Item>Logout</NavDropdown.Item>
                            </LinkContainer>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container> 

                    

            </Navbar>

        </header>
    )
}

export default MainNavigation

import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText} from 'reactstrap';
//   const NavbarComponent = (props) => {
//   const [isOpen, setisOpen] = useState (false);
//   const toggle = () => setisOpen (!isOpen);

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Container>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Web.video1</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">About U</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="float-right">Adminn</NavbarText>
          </Collapse>
          
        </Navbar>
        </Container>
      </div>
    );
  }
}
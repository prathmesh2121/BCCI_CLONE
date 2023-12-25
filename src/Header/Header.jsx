import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { Contact } from '../Content/Contact';
import {Route,Routes,Navigate, HashRouter } from 'react-router-dom';
import { Menu } from '../Menu/Menu';
import { Content } from '../Content/Content';
import { Footer } from '../Footer/Footer';
import {Players} from '../Content/Players';
import {AdminLogIn} from '../adminLogIn'

import './Header.css'



import logo from '../images/BCCI_logo.png'
import flag from '../images/Flag_of_India.png'
import teamWall from '../images/team2.jpg'


export const Header = () => {
    return ( <div>
                <div id="h1">
                    <label>The Board of Control for Cricket in India</label>
                </div>
                <h5>Wankhede Stadium , Churchgate, Mumbai - 400020 India</h5>
                
                
                    <img id='flag1' src={flag}></img>
                    <img id='logo' src={logo}></img>
                
                 <div id="menu1">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand >bcci.in</Navbar.Brand>
                            
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav className='offset-9'>
                                    <Nav.Link href="#/content" ac>Home</Nav.Link>
                                    
                                    <Nav.Link href="#/about">Schedules</Nav.Link>
                                    <Nav.Link href="#/contact">Contact</Nav.Link>
                                    
                                    <Nav.Link href="#/players">Players</Nav.Link>
                                    <Nav.Link href="#/adminLogIn">Admin</Nav.Link>
                                </Nav>
                                
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <HashRouter>
                    <Routes>
                        
                        <Route path='/content' element={<Content/>} />
                        <Route path='/contact' element={<Contact/>} />
                        <Route path='/Players' element={<Players/>} />
                        <Route path='/adminLogIn' element={<AdminLogIn/>} />
                        <Route path="*" element={<Content />} />


                    </Routes>
                </HashRouter>
                 
        </div>)
}
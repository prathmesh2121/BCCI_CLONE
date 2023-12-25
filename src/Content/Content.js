import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.css';
import './Content.css'
import team2 from '../images/team-win.jpg'
import indvsaus from '../images/ind-vs-aus.jpg'
import indwvspakw from '../images/indw-vs-pakw.jpg'
import indwvsengw from '../images/indw-vs-engw.jpg'
import roger from '../images/roger-binny.jpg'
import rajeev from '../images/RajeevShukla.jpg'
import jay from '../images/jay_shah.jpg'
import rohit_profile from '../images/rohit-profile.png'
import harmit from '../images/harmit-kaur.jpeg'

import { Footer } from '../Footer/Footer';
const link = "https://widget.crictimes.org/"; 
export const Content=()=>
{
    return( <div class="Con">
               <img src={team2} id='team2'></img>
               <div>
                    <label id='fix'>Fixtures</label>
                    
                    
                    <iframe src={link} style={{width:'80%',minHeight: '450px'}} frameborder="0" scrolling="yes"></iframe>
                    
                    
                    {/*
                    <Container> 
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem'} }>
                                        <Card.Img variant="top" src={indvsaus} />
                                        <Card.Body>
                                            <Card.Title>India vs Australia</Card.Title>
                                            <Card.Text>
                                                Venues : Nagpur , IND
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={indwvspakw} />
                                        <Card.Body>
                                            <Card.Title>India W vs Pakistan W</Card.Title>
                                            <Card.Text>
                                                Venues : Cape Town , SA
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={indwvsengw} />
                                        <Card.Body>
                                            <Card.Title>India W vs England W</Card.Title>
                                            <Card.Text>
                                                    Venues : Cape Town , SA
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                                
                            </Row>
                            </Container>
                            <br></br>
                            <Container>
                            <Row>
                                <Col>
                                    <Card style={{ width: '18rem'} }>
                                        <Card.Img variant="top" src={indvsaus} />
                                        <Card.Body>
                                            <Card.Title>India vs Australia</Card.Title>
                                            <Card.Text>
                                                Venues : Nagpur , IND
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={indwvspakw} />
                                        <Card.Body>
                                            <Card.Title>India W vs Pakistan W</Card.Title>
                                            <Card.Text>
                                                Venues : Cape Town , SA
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                                <Col>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={indwvsengw} />
                                        <Card.Body>
                                            <Card.Title>India W vs England W</Card.Title>
                                            <Card.Text>
                                                    Venues : Cape Town , SA
                                            </Card.Text>
                                            <Button variant="primary">See More</Button>
                                        </Card.Body>
                                        </Card>
                                </Col>
                            </Row>
                            </Container>
*/}
                            <br></br>
                            <label id='mng'>NEWS</label>
                            <br></br>
                            <div >
                                <iframe width="1200" height="60" src="https://rss.app/embed/v1/ticker/OfHc23zUA3Gfs7ok" frameborder="0"></iframe>
                                <div></div>
                                <iframe width="900" height="1600" src="https://rss.app/embed/v1/imageboard/FB0pzZRmyWmx5c6g" frameborder="0"></iframe>
                            </div>




                            <br></br>
                            <label id='mng'>Management Body</label>
                            <br></br>
                            <div  class="border">
                            <Card id="management" >
                                <label id='pres1'>Roger Binny</label>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <h4 id="president">President of BCCI</h4>
                                        <img id='roger' src={roger}></img>
                                    
                                    </blockquote>
                                </Card.Body>
                                <label id='pres2'>Rajeev Shukla</label>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <h4 id="vicepresident">Vice President of BCCI</h4>
                                        <img id='rajeev' src={rajeev}></img>
                                    
                                    </blockquote>
                                </Card.Body>
                                <label id='pres3'>Jay Shaha</label>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                    <h4 id="secretary">Secretary of BCCI</h4>
                                        <img id='jay' src={jay}></img>
                                    
                                    </blockquote>
                                </Card.Body>    
                            </Card> 

                            </div> 
                             
                    </div>
            <Footer/>
            </div>
            
            )
}
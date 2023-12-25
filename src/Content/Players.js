import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Players.css'

import virat from '../images/virat.png'
import rohit from '../images/rohit.png'
import rahul from '../images/rahul.png'
import hardikh from '../images/hardikh.png'
import dhawan from '../images/dhawan.png'
import gill from '../images/gill.png'
import pujara from '../images/pujara.png'
import shami from '../images/shami.png'
import shardul from '../images/shardul.png'
import siraj from '../images/siraj.png'
import sreyash from '../images/sreyash.png'
import rahane from '../images/rahane.png'
import axar from '../images/axar.png'
import ashwin from '../images/ashwin.png'
import jadeja from '../images/jadeja.png'
import rishab from '../images/rishab.png'
import bhumrah from '../images/bhumrah.png'
import ishant from '../images/ishant.png'

import wicket from '../images/wicket-keeper.png'
import bat from '../images/bat.png'
import allrounder from '../images/allrounder.png'
import ball from '../images/ball.png'

import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';



export const Players=()=>
{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
      
        <div>
        <Button id="mensBtn" variant="outline-primary">MENS</Button>{' '}
        <Button id="womensBtn" variant="outline-warning">WOMENS</Button>{' '}
        
        <label id='aplus'>GRADE : A+</label>

        <div  class="border">
          <CardGroup>
            
            <Card id="cardBdy">
            <Card.Img variant="top" src={bat}class="role"/>
              <Card.Img variant="top" src={rohit} class="profiles"/>
              <Card.Body>
                <Card.Title>ROHIT SHARMA</Card.Title>
                <Card.Text>
                  Captain of India
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card id="cardBdy">
              <Card.Img variant="top" src={wicket}class="role"/>
              <Card.Img variant="top" src={rahul}class="profiles"/>
              <Card.Body>
                <Card.Title>KL RAHUL</Card.Title>
                <Card.Text>
                  Vice Captain of India
                </Card.Text>
              </Card.Body>           
            </Card>
            <Card id="cardBdy">
            <Card.Img variant="top" src={bat}class="role"/>
              <Card.Img variant="top" src={virat} class="profiles"/>
              <Card.Body>
                <Card.Title>VIRAT KOHLI</Card.Title>
                <Card.Text>
                Former Captain of India
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card id="cardBdy">
            <Card.Img variant="top" src={ball}class="role"/>
              <Card.Img variant="top" src={bhumrah}class="profiles"/>
              <Card.Body>
                <Card.Title>JASPRIT BUMRAH</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
              
            </Card>
          </CardGroup>
          <label id='aplus'>GRADE : A</label>
          <CardGroup>
            
          <Card id="cardBdy">
          <Card.Img variant="top" src={allrounder}class="role"/>
              <Card.Img variant="top" src={ashwin} class="profiles"/>
              <Card.Body>
                <Card.Title>RAVICHANDRAN ASHWIN</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card id="cardBdy">
            <Card.Img variant="top" src={allrounder}class="role"/>
              <Card.Img variant="top" src={jadeja}class="profiles"/>
              <Card.Body>
                <Card.Title>RAVINDRA JADEJA</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card id="cardBdy">
              <Card.Img variant="top" src={wicket}class="role"/>
              <Card.Img variant="top" src={rishab} class="profiles"/>
              <Card.Body>
                <Card.Title>RISHAB</Card.Title>
                <Card.Text>
                Former Captain of India
                </Card.Text>
              </Card.Body>
              
            </Card>
            <Card id="cardBdy">
            <Card.Img variant="top" src={allrounder}class="role"/>
              <Card.Img variant="top" src={hardikh} class="profiles"/>
              <Card.Body>
                <Card.Title>HARDIKH PANDYA</Card.Title>
                <Card.Text>

                </Card.Text>
              </Card.Body>
              
            </Card>
          </CardGroup>
          <label id='aplus'>GRADE : B</label>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>      
                <CardGroup>
                    
                    <Card id="cardBdy">
                    <Card.Img variant="top" src={allrounder}class="role"/>
                      <Card.Img variant="top" src={axar} class="profiles"/>
                      <Card.Body>
                        <Card.Title>AXAR PATEL</Card.Title>
                        <Card.Text>
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                    <Card id="cardBdy">
                    <Card.Img variant="top" src={bat}class="role"/>
                      <Card.Img variant="top" src={sreyash}class="profiles"/>
                      <Card.Body>
                        <Card.Title>SREYASH IYYAR</Card.Title>
                        <Card.Text>
                          
                        </Card.Text>
                      </Card.Body>           
                    </Card>
                    <Card id="cardBdy">
                    <Card.Img variant="top" src={ball}class="role"/>
                      <Card.Img variant="top" src={ishant} class="profiles"/>
                      <Card.Body>
                        <Card.Title>ISHANT SHARMA</Card.Title>
                        <Card.Text>
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                    <Card id="cardBdy">
                    <Card.Img variant="top" src={ball}class="role"/>
                      <Card.Img variant="top" src={siraj}class="profiles"/>
                      <Card.Body>
                        <Card.Title>MOHAMMED SIRAJ</Card.Title>
                        <Card.Text>
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                  </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                  <Card  id="cardBdy">
                  <Card.Img variant="top" src={bat}class="role"/>
                          <Card.Img variant="top" src={rahane} class="profiles"/>
                          <Card.Body>
                            <Card.Title>AJINKYA RAHANE</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                          </Card.Body>
                  </Card>
                  <Card  id="cardBdy">
                          <Card.Img variant="top" src={bat}class="role"/>
                          <Card.Img variant="top" src={dhawan} class="profiles"/>
                          <Card.Body>
                            <Card.Title>SHIKHAR DHAWAN</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                          </Card.Body>
                  </Card>
                  <Card  id="cardBdy">
                  <Card.Img variant="top" src={ball}class="role"/>  
                          <Card.Img variant="top" src={shardul} class="profiles"/>
                          <Card.Body>
                            <Card.Title>SHARDUL THAKUR</Card.Title>
                            <Card.Text>
                              
                            </Card.Text>
                          </Card.Body>
                  </Card>
                  <Card id="cardBdy">
                  <Card.Img variant="top" src={bat}class="role"/>
                        <Card.Img variant="top" src={pujara}class="profiles"/>
                        <Card.Body>
                          <Card.Title>CHITRESHWAR PUJARA</Card.Title>
                          <Card.Text>
                          </Card.Text>
                        </Card.Body>
                  </Card>
                </CardGroup>
            </Carousel.Item>
      </Carousel>
      </div>
      </div>
      
    )
  }


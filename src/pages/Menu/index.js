import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Core from '../../assets/Core.svg';
import ExitIcon from '../../assets/exitIcon.svg';
import faceIconB from '../../assets/faceIconB.svg'
import instaIconB from '../../assets/instaIconB.svg'
import homeIcon from '../../assets/homeIcon.svg'
import usIcon from '../../assets/usIcon.svg'
import productIcon from '../../assets/productIcon.svg'
import contactIcon from '../../assets/contactIcon.svg'
import "./menu.css"


export default function Menu() {
  return(
    <>
      <Container className="container-menu" fluid={true}>
       <Row>
          <Col xs="6">
            <img src={Core} className="logoMenu" alt="Logo"/>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
          <a href='/home'><img src={ExitIcon} className="icon-exit" alt="link exit"/></a>  
          </Col>                 
        </Row>        
          <ul className="nav-itens">
            <li className="li-home"><a><img src={homeIcon} /> Home</a></li>
            <li className="li-us"><a><img src={usIcon} /> quem somos</a></li>
            <li className="li-product"><a><img src={productIcon} /> produtos</a></li>
            <li className="li-contact"><a><img src={contactIcon} /> contato</a></li>
          </ul>
        
        <Row>
          <Col xs="12">
            <a href="https://www.facebook.com/"><img src={faceIconB} className="icon-footer-face" alt="link facebook"/></a>
            <a href="https://www.instagram.com/?hl=pt-br"><img src={instaIconB} className="icon-footer-insta" alt="link instagram"/></a>
          </Col>
          </Row>
          <Row>
          <Col xs="12">
            <p className="footer-menu">
              R. Pensilvânia, 1136 - casa 7 - Brooklyn Novo - CEP: 04564-003<br></br>
              (atendimento somente com hora marcada)<br></br>
              + 55 11 94160.2083  |  contato@corebr.com.br
            </p>
          </Col>
        </Row>        
      </Container>     
     
    </>  
  )
};
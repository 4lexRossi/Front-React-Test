import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import "./home.css"
import Hotel from '../../assets/Accoya_Hotel_Fasano_Bernardes Arquitetura.png';
import Restaurante from '../../assets/Hakwood_Tano_Restaurante_Hyatt.png';
import Gama from '../../assets/Hakwood_Gama_Issa.png';
import Core from '../../assets/Core.svg';
import faceIcon from '../../assets/faceIcon.svg';
import instaIcon from '../../assets/instaIcon.svg';
import nextIcon from '../../assets/nextIcon.svg'


export default function Home() {
  return (
    <>
      <Container className="themed-container" fluid={true}>    
        <Row>
            <Col xs="6">
              <img src={Core} className="logo" alt="Logo"/>
            </Col>            
        </Row>
        <Row>
          <Col xs="12">
            <a href="https://www.facebook.com/"><img src={faceIcon} className="icon-nav-bar-face" alt="link facebook"/></a>
            <a href="https://www.instagram.com/?hl=pt-br"><img src={instaIcon} className="icon-nav-bar-insta" alt="link instagram"/></a>
            <a href='/menu'><span className="menu"><h4>MENU</h4></span></a>
          </Col>
        </Row>
        <div className="carousel">            
          <Carousel>
            <Carousel.Item>
              <img src={Hotel} alt="Hotel" />          
            </Carousel.Item>
            <Carousel.Item>
              <img src={Gama} alt="Gama" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={Restaurante} alt="Restaurante"/>
            </Carousel.Item>
          </Carousel> 
          <p className="stripe" />
          <Row>
            <Col xs="6">
              <p className="title">
                MADEIRA NATURAL SUSTENTÁVEL TECNOLÓGICA
              </p>
            </Col>            
          </Row>          
          <Row>
            <Col xs="6">
              <p className="description">
                Somos especializados em fornecer produtos e soluções em madeiras estáveis e certificadas para as áreas de arquitetura, engenharia e design.
              </p>
            </Col>            
          </Row>
               
        </div>                
        <Row >
            <Col xs="6">
              <p className="footer">
                R. Pensilvânia, 1136 - casa 7 - Brooklyn Novo - CEP: 04564-003<br></br>
                (atendimento somente com hora marcada)<br></br>
                + 55 11 94160.2083  |  contato@corebr.com.br
              </p>
            </Col>           
        </Row>
        <Row>
          <Col xs="6">
            <p className="text">Mais projetos na página de cada produto</p>
            <a href="/menu"><img src={nextIcon} className="nextIcon" alt="link proxima pagina"/></a>
          </Col>
        </Row>
    </Container>
  </>
  )
};
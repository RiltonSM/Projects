import React from 'react';
import {Container, Image, Col, Row} from 'react-bootstrap';

const ItemCart = props => {
    console.log(props);
    return(
        <Container>
            <Row>
                <Col xs={12} md={3} lg={2}>
                    <Image src = {props.produto.imagem} fluid/>
                </Col>
                <Col xs={4} md={3} lg={4}>
                    <h1>{props.produto.nome}</h1>
                    <h4>R$ {props.produto.valor}</h4>
                </Col>
                <Col xs={3} md={3} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
                    <Row style={{alignItems: 'center'}}>
                        <i onClick={() => props.subQuant(props.indice)} className="fas fa-minus" style={{marginRight: 10}}></i>
                        <span style={{marginRight: 10}}>{props.produto.quantidade}</span>
                        <i onClick={() => props.addQuant(props.indice)} className="fas fa-plus" style={{marginRight: 10}}></i>
                    </Row>
                </Col>
                <Col xs={1} style={{display: 'flex', justifyContent: 'center'}}>
                    <Row style={{alignItems: 'center'}}>
                        <i onClick={() => props.removeCart(props.indice)} className="far fa-trash-alt"></i>
                    </Row>
                </Col>
                <Col xs={4} md={2} lg={2} style={{display: 'flex', justifyContent: 'center'}}>
                    <Row style={{alignItems: 'center'}}>
                        <h3>R$ {props.produto.valor * props.produto.quantidade}</h3>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemCart;
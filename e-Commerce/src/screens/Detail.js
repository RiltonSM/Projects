import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardRow from '../components/CardRow';

const Detail = props => {
    let params = useParams();
    params = params.null;
    
    let { produtos } = props;
    let produto = produtos.filter(produto => {
       return produto.id == params;
    });
    produto[0].quantidade = 1;
    console.log(params, produto);
    return(
        <div>
            <Header info={props.menu} number={props.number}/>
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} md={6}>
                        <Image src={produto[0].imagem} style={{width: 450, height: 230}}/>
                    </Col>
                    <Col xs={12} md={6}>
                        <Jumbotron className="border border-primary" fluid style={{backgroundColor: '#FFF', borderRadius: 10, paddingTop: 0}}>
                            <div style={{marginLeft: 10}}>
                                <h1 style={{marginTop: 0}}>{produto[0].nome}</h1>
                                {produto[0].promocao ? 
                                <div><h6 className="text-secondary"><del>{`De: R$ ${produto[0].valorAnt}`}</del></h6>
                                <h4>{`Por: R$ ${produto[0].valor}`}</h4></div> : <h4>{`R$ ${produto[0].valor}`}</h4>}
                                <h6>{`Em até 12x de R$ ${(produto[0].valor/12).toFixed(2)} sem juros`}</h6>
                                <div>
                                    <Button onClick={() => props.addCart(produto[0])}>Adicionar ao carrinho</Button>
                                </div>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
                <CardRow produtos = {props.produtos} home={false} id={produto[0].categoria}/>
            </Container>
            
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        width: '80%'
    }
}

export default Detail;
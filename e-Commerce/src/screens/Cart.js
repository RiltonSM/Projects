import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ItemCart from '../components/ItemCart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from "axios";

async function pagar(){
    
}

async function test(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}



const Cart = props => {
    console.log(props);
    const data = {
        currency: 'BRL',
        itemId1: '0',
        itemDescription1: 'produto',
        itemAmount1: '0.01',
        itemQuantity: '1',
        itemWeight: '1',
        shippingAddressRequired: false,

    }
    return(
        <div>
            <Header info={props.menu} number={props.number} />
            <Container style ={{marginTop: 15}}>
            {   
                props.cart.map((produto, i) => {
                    return (
                        <div key={i}>
                            <ItemCart 
                                indice={i} 
                                produto={produto} 
                                addQuant={props.addQuant} 
                                subQuant={props.subQuant}
                                removeCart={props.removeCart}
                            />
                            <hr />
                        </div>
                        
                    )
                })
            }
            {
                props.total === 0 ? 
                
                <Jumbotron fluid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                        <Col style={{display: 'flex', justifyContent: 'center'}}>
                            <h2>Ops!</h2>
                        </Col>
                    
                    
                        <Col>
                            <h4>Carrinho Vazio</h4>
                        </Col>
                    </div>
                </Jumbotron> 
                    
                :

                <Row style={{display: 'flex', alignItems: 'center'}}>
                    <Col xs={10} style={{justifyContent: 'center'}}>
                        <h2>Total</h2>
                    </Col>
                    <Col xs={2} style={{justifyContent: 'center'}}>
                        <h2>R$ {props.total}</h2>
                    </Col>
                </Row>
                
            }
            
            </Container>
            <Footer />
        </div>
    )
}

export default Cart;
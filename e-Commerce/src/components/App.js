import React from 'react';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Cart from '../screens/Cart';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const menu = {
    brand: "Rilton Store",
    link: {
        1: 'Home',
        2: 'Quem somos'
    },
    dropdown: {
        titulo: 'Produtos',
        1: 'Notebooks',
        2: 'Tablets',
        3: 'PC Gamer'
    } 
}

const images = {
    path: {
        1: require("../images/imagem1.png"),
        2: require('../images/imagem2.png'),
        3: require('../images/imagem3.png')
    }
}

const produtos = [
    {
        id: 0,
        nome: "Notebook 1",
        valor: "1499.00",
        valorAnt: "1999.00",
        promocao: true,
        imagem: require('../images/notebook1.jpg'),
        categoria: 0
    },
    {
        id: 1,
        nome: "PC Gamer",
        valor: "2299.00",
        imagem: require('../images/pcGamer.jpg'),
        categoria: 1
    },
    {
        id: 2,
        nome: "Notebook 2",
        valor: "2299.00",
        imagem: require('../images/notebook2.jpg'),
        categoria: 0
    },
    {
        id: 3,
        nome: "Tablet",
        valor: "999.00",
        imagem: require('../images/tablet.jpg'),
        categoria: 2
    },
    {
        id: 4,
        nome: "Tablet 2",
        valor: "1299.00",
        imagem: require('../images/tablet2.jpg'),
        categoria: 2
    },
    {
        id: 5,
        nome: "Tablet 3",
        valor: "1499.00",
        imagem: require('../images/tablet3.jpg'),
        categoria: 2
    },
    {
        id: 6,
        nome: "Notebook 3",
        valor: "1999.00",
        imagem: require('../images/notebook3.jpg'),
        categoria: 0
    },
    {
        id: 7,
        nome: "Notebook 4",
        valor: "2999.00",
        imagem: require('../images/notebook4.jpg'),
        categoria: 0
    },
    {
        id: 8,
        nome: "PC Gamer 2",
        valor: "2499.00",
        imagem: require('../images/pcGamer2.jpg'),
        categoria: 1
    }
]

let total = null;

class App extends React.Component {
    state = {
        cart: [],
        total: 0,
        produtoAtivo: null
    }
    componentDidUpdate(){
        if(total !== this.state.total){
            this.setState({total: this.calcCart()})
            total = this.state.total;
        } else {
            total = 0;
        }
         
        
    }

    addCart = produto => {
        let newCart = [];
        newCart = this.state.cart;
        newCart.push(produto); 
        this.setState({cart: newCart})
    }

    removeCart = i => {
        let newCart = [];
        newCart = this.state.cart;
        newCart.splice(i, 1);
        this.setState({cart: newCart})
    }

    addQuant = i => {
        let newCart = [];
        newCart = this.state.cart;
        newCart.map((produto, j) => {
            if(i === j){
                produto.quantidade++;
            }
        });
        this.setState({cart: newCart});
    }

    subQuant = i => {
        let newCart = [];
        newCart = this.state.cart;
        newCart.map((produto, j) => {
            if(i === j){
                if(produto.quantidade === 1){
                    return
                } else{
                    produto.quantidade--;
                }
            }
        });
        this.setState({cart: newCart});
    }

    calcCart = () => {
        let total = 0;
        let cart = this.state.cart;
        cart.forEach(produto => {
            total = total + (produto.valor * produto.quantidade);
        });
        return total;
        
    }

    render(){
        console.log(this.state);
        return(
            <div style={{overflowX: 'hidden'}}>
                <Router>
                    <Switch>
                        <Route path= {`/detail/:${this.state.produtoAtivo}`}>
                            <Detail 
                                produtos={produtos} 
                                menu={menu} 
                                addCart={this.addCart} 
                                number={this.state.cart.length}
                            />
                        </Route>
                        <Route path="/" exact>
                            <Home 
                                produtos={produtos} 
                                menu={menu} 
                                images={images} 
                                number={this.state.cart.length}
                            />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart 
                                menu={menu} 
                                cart={this.state.cart}
                                total={this.state.total}
                                addQuant={this.addQuant} 
                                subQuant={this.subQuant} 
                                number={this.state.cart.length}
                                removeCart={this.removeCart}
                            />
                        </Route>
                    </Switch>
                </Router>
            </div>
            
        );
    }
}

export default App;
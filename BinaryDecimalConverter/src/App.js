import React from 'react';
import Field from './components/Field';
import Result from './components/Result';

class App extends React.Component {
    state = {
        binario: '',
        decimal: 0
    }
    
    componentDidUpdate(){
        let novoDecimal = parseInt(this.state.binario, 2).toString(10);
        if(this.state.decimal !== novoDecimal){
            this.setState({decimal: novoDecimal})
        }
    }

    onChangeBin = event => {
        this.setState({binario: event.target.value})
    }

    verifica = event => {
        if(event.key === '1' || event.key === '0'){
            this.setState({binario: event.target.value})
            
        } else {
            event.preventDefault();
        }
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: 300, height: 250, borderRadius: 10, backgroundColor: '#ffffe6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'block'}}>
                        <Field verifica={this.verifica} onChangeBin={this.onChangeBin} binario={this.state.binario} />
                        <Result decimal = {this.state.decimal} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
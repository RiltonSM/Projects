import React from 'react';
import Display from './components/Display';
import Button from './components/Button';

class App extends React.Component {
    state = {
        first: null,
        second: null,
        result: 0,
        operation: null
    }

    verifica = (operation, key) => {
        if(operation === false){
            if(key === "AC"){
                this.setState({
                    first: null,
                    second: null,
                    result: 0,
                    operation: null
                });
                return
            }
            if(this.state.operation === null){
                this.setState({first: this.state.first === null ? key : this.state.first + key})
            } else {
                this.setState({second: this.state.second === null ? key :this.state.second + key})
            }
        } else if(key === "="){
            this.setState({
                result: eval(`${this.state.first}${this.state.operation}${this.state.second}`),
                first: null,
                second: null,
                operation: null
            })
        } else {
            if(this.state.first === null){
                this.setState({first: this.state.result})
            } 
            this.setState({operation: key})
        }
        console.log(operation, key, this.state.first, this.state.second, this.state.operation, this.state.result);
    }
    render(){
        return(
        <div style={{width: 400, height: 600, borderStyle: 'solid', borderWidth: 1, borderRightWidth: 0}}>
            <Display number={this.state}/>
            <div style={{width: '100%', height: 500}}>
                <div style={{width: '100%', height: 100, display: 'flex'}}>
                    <Button size={3} label="AC" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="/" color="#ff9900" operation verifica={this.verifica}/>
                </div>
                <div style={{width: '100%', height: 100, display: 'flex'}}>
                    <Button size={1} label="7" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="8" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="9" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="*" color="#ff9900" operation verifica={this.verifica}/>
                </div>
                <div style={{width: '100%', height: 100, display: 'flex'}}>
                    <Button size={1} label="4" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="5" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="6" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="-" color="#ff9900" operation verifica={this.verifica}/>
                </div>
                <div style={{width: '100%', height: 100, display: 'flex'}}>
                    <Button size={1} label="1" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="2" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="3" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="+" color="#ff9900" operation verifica={this.verifica}/>
                </div>
                <div style={{width: '100%', height: 100, display: 'flex'}}>
                    <Button size={2} label="0" color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="." color="#e6e6e6" operation={false} verifica={this.verifica}/>
                    <Button size={1} label="=" color="#ff9900" operation verifica={this.verifica}/>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
import React from 'react';
import Square from './components/Square';
import Fields from './components/Fields';
import Code from './components/Code';

class App extends React.Component {
    state = {
        width: 500,
        height: 300, 
        borderWidth: 3, 
        borderStyle: 'solid', 
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0,
        lang: true
    }

    changeWidth = event => {
        this.setState({width: event.target.value});
    }
    changeHeight = event => {
        this.setState({height: event.target.value});
    }
    changeBorderWidth = event => {
        this.setState({borderWidth: event.target.value});
    }
    changeBorderStyle = event => {
        this.setState({borderStyle: event.target.value});
    }
    changeBorderTopLeftRadius = event => {
        this.setState({borderTopLeftRadius: event.target.value});
    }
    changeBorderTopRightRadius = event => {
        this.setState({borderTopRightRadius: event.target.value});
    }
    changeBorderBottomLeftRadius = event => {
        this.setState({borderBottomLeftRadius: event.target.value});
    }
    changeBorderBottomRightRadius = event => {
        this.setState({borderBottomRightRadius: event.target.value});
    }
    changeLang = lang => {
        this.setState({lang});
    }

    render(){
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'block'}}>
                    <div>
                        <Square estilo = {this.state}/>
                    </div>
                    <div>
                        <Fields 
                            estilo = {this.state}
                            changeWidth={this.changeWidth}
                            changeHeight={this.changeHeight}
                            changeBorderWidth={this.changeBorderWidth}
                            changeBorderTopRightRadius={this.changeBorderTopRightRadius}
                            changeBorderTopLeftRadius={this.changeBorderTopLeftRadius}
                            changeBorderStyle={this.changeBorderStyle}
                            changeBorderBottomRightRadius={this.changeBorderBottomRightRadius}
                            changeBorderBottomLeftRadius={this.changeBorderBottomLeftRadius}
                        />
                    </div>
                    <div>
                        <Code estilo={this.state} changeLang={this.changeLang}/>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App;
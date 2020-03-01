import React from 'react';
import CountDownTimer from './components/CountDownTimer';

var action;
class App extends React.Component {
    state = {
        hours: '',
        minutes: '',
        seconds: '',
        totalSeconds: null,
        disable: false
    }

    componentDidUpdate(){
        console.log(this.state);
        if(parseInt(this.state.minutes) > 59){
            this.setState({minutes: 59}) 
        }
        if(parseInt(this.state.seconds) > 59){
            this.setState({seconds: 59}) 
        }
    }

    isBlank = () => {
        if(this.state.hours.trim().length === 0){
            this.setState({hours: 0})
        }
        if(this.state.minutes.trim().length === 0){
            this.setState({minutes: 0})
        }
        if(this.state.seconds.trim().length === 0){
            this.setState({seconds: 0})
        }
    }

    calcTotalSeconds = () =>{
        let newTotalseconds = (parseInt(this.state.hours*3600) + parseInt(this.state.minutes *60) + parseInt(this.state.seconds));
        this.setState({totalSeconds: newTotalseconds, disable: true});
    }

    perSecond = () => {
        this.isBlank();
        this.calcTotalSeconds();
        action = setInterval(this.interval, 1000);
    }

    interval = () => {
        console.log(this.state.totalSeconds);
        console.log("passou 1 segundo")
        let newState = this.state;
        
        if(newState.totalSeconds === 0){
            clearInterval(action);
            alert("Fim do cronometro");
            this.setState({disable: false})
            return ;
        }
        newState.totalSeconds = newState.totalSeconds - 1;
        newState.seconds = newState.seconds - 1;
        if(newState.seconds === -1 && newState.minutes > 0){
            newState.minutes = newState.minutes - 1;
            newState.seconds = 59;
        } 
        if(newState.seconds === -1 && newState.minutes === -1 && newState.hours > 0){
            newState.hours = newState.hours - 1;
            newState.minutes = 59;
            newState.seconds = 59;
        }
        this.setState(newState)
    }

    onChangeHour = event => {
        this.setState({hours: event.target.value})
    }

    onChangeMinute = event => {
        this.setState({minutes: event.target.value})
    }

    onChangeSecond = event => {
        this.setState({seconds: event.target.value})
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%', backgroundColor:'#99ddff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CountDownTimer 
                    seconds={this.state.seconds} 
                    minutes={this.state.minutes} 
                    hours={this.state.hours} 
                    disable={this.state.disable}
                    start = {this.perSecond}
                    onChangeHour={this.onChangeHour}
                    onChangeMinute={this.onChangeMinute}
                    onChangeSecond={this.onChangeSecond}
                />
            </div>
        );
    }
}

export default App;
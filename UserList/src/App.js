import React from 'react';
import Person from './components/Person';

class App extends React.Component {
    state = {
        people: [
            {
                id: 0,
                name: 'Rilton',
                street: 'A',
                city: 'Fortaleza',
                UF: 'CE',
                country: 'Brazil',
                telephone: "85 XXXXX-XXXX",
                birthday: '07/12/96',
                visible: false
            },
            {
                id: 1,
                name: 'Aarom',
                street: 'B',
                city: 'London',
                UF: 'LO',
                country: 'England',
                telephone: "968 XXXXX-XXXX",
                birthday: '03/02/78',
                visible: false
            },
            {
                id: 2,
                name: 'Jonh',
                street: 'A',
                city: 'New York',
                UF: 'NY',
                country: 'USA',
                telephone: "325 XXXXX-XXXX",
                birthday: '27/12/85',
                visible: false
            }
        ]
    }

    changeVisibility = id => {
        let people = this.state.people;
        people[id].visible = !people[id].visible;
        this.setState({people});
    }

    render(){
        return(
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Person peoples={this.state.people} changeVisibility = {this.changeVisibility}/>
            </div>
        )
    }
}

export default App;
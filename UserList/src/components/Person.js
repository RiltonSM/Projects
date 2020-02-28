import React from 'react';

const Person = props => {
    return(
        <div className="container">
            {props.peoples.map(people => {
                return (
                <div style={{cursor: 'pointer'}} onClick={() => props.changeVisibility(people.id)}>
                    {people.visible ? 
                        <div class="jumbotron">
                            <h1 class="display-4">{people.name}</h1>
                            <p class="lead">{people.street}</p>
                            <p class="lead">{people.city}</p>
                            <p class="lead">{people.UF}</p>
                            <p class="lead">{people.country}</p>
                            <p class="lead">{people.telephone}</p>
                            <p class="lead">{people.birthday}</p>
                        </div>
                      :
                        <div class="jumbotron">
                            <h1 class="display-4">{people.name}</h1>
                        </div>
                    }
                </div>
                )
            })}
        </div>
    )
}

export default Person;
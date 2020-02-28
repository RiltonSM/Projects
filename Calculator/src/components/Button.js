import React from 'react';

const Button = props => {
    const styles = {
        button: {
            width: `${25*props.size}%`, 
            height: 100, 
            backgroundColor: props.color, 
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 30,
            borderStyle: 'solid',
            borderWidth: 0.5,
            borderLeft: 0 
        }
    }

    return(
        <div style={styles.button} onClick={() => props.verifica(props.operation, props.label)}>
            {props.label}
        </div>
    )
}



export default Button;
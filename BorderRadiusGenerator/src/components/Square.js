import React from 'react';

const Square = props => {
    return(
        <div style={{
            width: parseInt(props.estilo.width), 
            height: parseInt(props.estilo.height), 
            borderWidth: parseInt(props.estilo.borderWidth), 
            borderStyle: props.estilo.borderStyle, 
            borderTopLeftRadius: parseInt(props.estilo.borderTopLeftRadius), 
            borderTopRightRadius: parseInt(props.estilo.borderTopRightRadius), 
            borderBottomLeftRadius: parseInt(props.estilo.borderBottomLeftRadius), 
            borderBottomRightRadius: parseInt(props.estilo.borderBottomRightRadius)
        }}>
            
        </div>
    );
}

export default Square;
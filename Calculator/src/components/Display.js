import React from 'react';

const Display = props => {
    return(
        <div style={styles.display}>
            <span style={{marginRight: 10}}>{props.number.first !== null ? props.number.operation !== null ? props.number.second : props.number.first : props.number.result}</span>
        </div>
    )
}

const styles = {
    display: {
        width: 400, 
        height: 100, 
        backgroundColor: 'black', 
        color: 'white', 
        fontSize: 80, 
        display: 'flex', 
        justifyContent: 'flex-end'
    }
}
export default Display;
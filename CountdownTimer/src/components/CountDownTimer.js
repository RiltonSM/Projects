import React from 'react';

const CountDownTimer = props => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={styles.margin}>
                    <label htmlFor="hours" style={styles.label}>Hours</label><br/>
                    <input type="text" name="hours" disabled={props.disable} onChange={(e) => props.onChangeHour(e)} value={props.hours} style={styles.input}/>
                </div>
                <div style={styles.margin}>
                    <label htmlFor="minutes" style={styles.label}>Minutes</label><br/>
                    <input type="text" name="minutes" disabled={props.disable} onChange={(e) => props.onChangeMinute(e)} value={props.minutes} style={styles.input}/>
                </div>
                <div style={styles.margin}>
                    <label htmlFor="seconds" style={styles.label}>Seconds</label><br/>
                    <input type="text" name="seconds" disabled={props.disable} onChange={(e) => props.onChangeSecond(e)} value={props.seconds} style={styles.input}/>
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <button onClick={() => props.start()} style={styles.button}>Iniciar</button>
            </div>
        </div>
    )
}

const styles = {
    input: {
        width: 80, 
        height: 100, 
        fontSize: 50, 
        borderLeft: 0, 
        borderRight: 0, 
        borderTop: 0, 
        borderBottom: 1, 
        borderStyle: 'solid', 
        backgroundColor: '#99ddff', 
        textAlign: 'center'
    },
    margin: {
        margin: 30,
        textAlign: 'center'
    },
    label: {
        fontSize: 25
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: '#0040ff',
        borderStyle: 'none',
        borderRadius: 15,
        color: 'white',
        fontSize: 20
    }
}

export default CountDownTimer;
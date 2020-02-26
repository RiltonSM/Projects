import React from 'react';

const Code = props => {
    return (
        <div style={{marginTop: 20}}>
            {props.estilo.lang ? 
            <div style={{backgroundColor: '#f0e6ff'}}>  
                width: {props.estilo.width},
                <br />
                height: {props.estilo.height},
                <br />
                borderWidth: {props.estilo.borderWidth}
                <br/>
                borderStyle: {props.estilo.borderStyle}
                <br/>
                borderTopLeftRadius: {props.estilo.borderTopLeftRadius},
                <br/>
                borderTopRightRadius: {props.estilo.borderTopRightRadius},
                <br/>
                borderBottomLeftRadius: {props.estilo.borderBottomLeftRadius},
                <br/>
                borderBottomRightRadius: {props.estilo.borderBottomRightRadius}
            </div>:
            <div style={{backgroundColor: '#ccffcc'}}>  
                width: {props.estilo.width},
                <br />
                height: {props.estilo.height},
                <br />
                borde-width: {props.estilo.borderWidth}
                <br/>
                border-style: {props.estilo.borderStyle}
                <br/>
                border-top-left-radius: {props.estilo.borderTopLeftRadius},
                <br/>
                border-top-right-radius: {props.estilo.borderTopRightRadius},
                <br/>
                border-bottom-left-radius: {props.estilo.borderBottomLeftRadius},
                <br/>
                border-bottom-right-radius: {props.estilo.borderBottomRightRadius}
            </div>
            }
            <div>
                <label><input type='radio' onClick={() => props.changeLang(true)} checked={props.estilo.lang} value="JSX"/>JSX</label>
                <label><input type='radio' onClick={() => props.changeLang(false)} checked={!props.estilo.lang} value="CSS"/>CSS</label>
            </div>
        </div>
    )
}

export default Code;
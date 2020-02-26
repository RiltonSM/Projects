import React from 'react';

const Field = props => {
    return(
        <div>
            <h3>Digite o número binário:</h3>
            <form>
                <input style={{width: '100%'}} type="text" onKeyPress={props.verifica} onChange={e => props.onChangeBin(e)} value={props.binario}></input>
            </form>
        </div>
    )
}

export default Field;
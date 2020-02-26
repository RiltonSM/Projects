import React from 'react';

const Fields = props => {
    console.log(props)
    return(
        <div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
        
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>Width:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>Height:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderWidth:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderStyle:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderTopLeftRadius:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderTopRightRadius:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderBottomLeftRadius:</span>
                </div>
                <div style={{lineHeight: 2}}>
                    <span style={{marginRight: 5}}>BorderBottomRightRadius:</span>    
                </div>
                
            </div>
        
            <div style={{display: 'flex', flexDirection: 'column'}}>
        
                <div style={{lineHeight: 2}}>  
                    <input onChange={e => props.changeWidth(e)} value={props.estilo.width} type="text"></input>
                </div>
                <div style={{lineHeight: 2}}>  
                    <input onChange={e => props.changeHeight(e)} value={props.estilo.height} type="text"></input>
                </div>
                <div style={{lineHeight: 2}}>            
                    <input onChange={e => props.changeBorderWidth(e)} value={props.estilo.borderWidth} type="text"></input>
                </div>
                <div style={{lineHeight: 2}}>
                    <select onChange={e => props.changeBorderStyle(e)} value={props.estilo.borderStyle}>
                        <option>solid</option>
                        <option>dotted</option>
                        <option>dashed</option>
                        <option>double</option>
                        <option>groove</option>
                        <option>ridge</option>
                        <option>inset</option>
                        <option>outset</option>
                        <option>none</option>
                        <option>hidden</option>
                    </select>
                </div>
                <div style={{lineHeight: 2}}>
                    <input onChange={e => props.changeBorderTopLeftRadius(e)} value={props.estilo.borderTopLeftRadius} type="text" ></input>
                </div>
                <div style={{lineHeight: 2}}>
                    <input onChange={e => props.changeBorderTopRightRadius(e)} value={props.estilo.borderTopRightRadius} type="text" ></input>
                </div>
                <div style={{lineHeight: 2}}>
                    <input onChange={e => props.changeBorderBottomLeftRadius(e)} value={props.estilo.borderBottomLeftRadius} type="text" ></input>
                </div>
                <div style={{lineHeight: 2}}>
                    <input onChange={e => props.changeBorderBottomRightRadius(e)} value={props.estilo.borderBottomRightRadius} type="text" ></input>
                </div>
    
            </div>
        </div>
    )
}

export default Fields;
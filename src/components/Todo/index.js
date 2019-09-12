import React from 'react'

import {Todo} from './style'

import important_false from '../../assets/important_false.svg'
import important_true from '../../assets/important_true.svg'

export default function ToDo(props) {
    return (
        <>
            <Todo id={props.id} className = "todo">
                <div>
                    <p>{props.text}</p>
                </div>
                <div>
                    <p  onClick={props.handleImportant}><img 
                    src={props.important ? important_true : important_false}
                    alt = {
                        props.important 
                            ? "Importante"
                            : "Não importante" 
                    }
                    /></p>
                    <p onClick = {props.handleDone}>{props.done ? "Completo" : "Incompleto"}</p>
                </div>
            </Todo>
        </>
    )   
}
import React, { useState, useEffect } from 'react'

import { Principal, Text, Todo } from './style'
export default function Main() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        let allTodos = localStorage.getItem('todos');
        if (allTodos) {
            setTodos(JSON.parse(allTodos).data);
        }
    }, [])
    function handleClick(e) {
        e.preventDefault();
        if (text) {
            if (localStorage.getItem('todos')) {
                console.log(localStorage.getItem('todos'))
                let { data } = JSON.parse(localStorage.getItem('todos'));
                data.push({
                    id: data.length + 1,
                    done: false,
                    important: false,
                    text: text,
                })
                localStorage.setItem('todos', JSON.stringify({ data }))

                let allTodos = JSON.parse(localStorage.getItem('todos'))
                console.log(allTodos);

                setTodos(allTodos.data);
                setText('')
            } else {
                localStorage.setItem("todos", JSON.stringify({
                    data: [{
                        id: 1,
                        done: false,
                        important: false,
                        text: text
                    }]
                }))
                let allTodos = JSON.parse(localStorage.getItem('todos'))
                setTodos(allTodos.data)
                setText('')
            }
        } else {
            console.log(todos);

        }
    }

    return (
        <Principal>
            <div style={{ gridColumnStart: '1' }}>
                <h1>Add ToDo</h1>
                <Text placeholder="Adicione todo" value={text} onChange={e => { setText(e.target.value) }} />
                <button onClick={handleClick}>Adicionar ToDo</button>

            </div>
            <Todo>
                {todos.length ? todos.map(todo => {
                    return (
                        <content>
                            <div>
                                <p>{todo.text}</p>
                            </div>
                            <div>
                                <p>{todo.importante ? "Importante" : ""}</p>
                                <p>{todo.dono ? "Completo" : "Incompleto"}</p>
                            </div>
                        </content>
                    )
                }) : <p> Não possui todos </p>}
            </Todo>
        </Principal>
    )
}
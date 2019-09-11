import React, { useState, useEffect } from 'react'

import { Principal, Text, Todos, Filters } from './style'
import ToDo from '../../components/Todo/'


export default function Main() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [all, setAll] = useState('true');
    const [important, setImportant] = useState(false);
    const [not_important, setNotImportant] = useState(true);

    useEffect(() => {
        let allTodos = localStorage.getItem('todos');
        if (allTodos) {
            setTodos(JSON.parse(allTodos).data);
        }
    }, [])
    function handleChange(e) {
        if (e.keyCode === 13) {
            handleClick()
        } else {
            setText(e.target.value);
        }
    }
    function handleClick(e) {
        if (text) {
            if (localStorage.getItem('todos')) {
                let { data } = JSON.parse(localStorage.getItem('todos'));
                data.push({
                    id: data.length + 1,
                    done: false,
                    important: false,
                    text: text,
                })
                localStorage.setItem('todos', JSON.stringify({ data }))

                let allTodos = JSON.parse(localStorage.getItem('todos'))

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
        }
    }
    function handleImportant(id, e) {
        let todoImportant = todos
        for (let i = 0; i < todoImportant.length; i++) {
            if (todoImportant[i].id === id) {
                todoImportant[i].important = !todoImportant[i].important
                break;
            }
        }
        localStorage.setItem('todos', JSON.stringify({ data: todoImportant }))

        setTodos(JSON.parse(localStorage.getItem('todos')).data);
    }
    function handleImportante(id, e) {
        let importantes = todos.filter(todo => todo.important === true)

        setTodos(importantes)
    }
    function handleAll(id, e) {
        setTodos(JSON.parse(localStorage.getItem('todos')).data)
    }
    function handleNotImportant(id, e) {
        let importantes = todos.filter(todo => todo.important === false)

        setTodos(importantes)
    }
    return (
        <Principal>
            <div style={{ gridColumnStart: '1' }}>
                <h1>Add ToDo</h1>
                <Text placeholder="Adicione todo" value={text} onChange={handleChange} onKeyUp={handleChange} />
                <button onClick={handleClick}>Adicionar ToDo</button>

            </div>
            <Todos>
                {todos.map(todo => {
                    return (
                        <ToDo
                            important={todo.important}
                            text={todo.text}
                            done={todo.done}
                            id={todo.id}
                            handleImportant={e => handleImportant(todo.id, e)}
                            key={todo.id} />
                    )
                })}
            </Todos>
            <Filters>
                <button onClick = {handleAll}>Todos</button>
                <button onClick = {handleImportante}>Importantes</button>
                <button onClick = {handleNotImportant}>Não Importantes</button>

            </Filters>
        </Principal>
    )
}
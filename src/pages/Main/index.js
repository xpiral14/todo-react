import React, { useState, useEffect } from 'react'

import { Principal, Text, Todos, Filters, Button, Counter } from './style'
import ToDo from '../../components/Todo/'


export default function Main() {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([])

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
    function handleDone(id, e){
        let todoComplete = todos;

        for(let i = 0; i < todoComplete.length; i++){
            if(todoComplete[i].id === id){
                todoComplete[i].done = !todoComplete[i].done;
                break;
            }
        }
        localStorage.setItem('todos', JSON.stringify({data: todoComplete}));
        setTodos(JSON.parse(localStorage.getItem('todos')).data)
    }

    function handleImportante() {
        const Todos = JSON.parse(localStorage.getItem('todos')).data
        let importantes = Todos.filter(todo => todo.important === true)
        setTodos(importantes)
    }

    function handleAll() {
        setTodos(JSON.parse(localStorage.getItem('todos')).data)
    }

    function handleNotImportant() {
        const Todos = JSON.parse(localStorage.getItem('todos')).data
        let notImportantes = Todos.filter(todo => todo.important === false)
        setTodos(notImportantes)
        
    }
    return (
        <Principal>
            <div style={{ gridColumnStart: '1' }}>
                <h1>Add ToDo</h1>
                <Text placeholder="Adicione todo" value={text} onChange={handleChange} onKeyUp={handleChange} />
                <Button onClick={handleClick}>Adicionar ToDo</Button>

            </div>
            <Todos>
                {todos.map(todo => {
                    console.log(todo.done)
                    return (
                        <ToDo
                            important={todo.important}
                            text={todo.text}
                            done={todo.done}
                            id={todo.id}
                            handleImportant={e => handleImportant(todo.id, e)}
                            handleDone = {e => handleDone(todo.id, e)}
                            key={todo.id} />
                    )
                })}
            </Todos>
            <Filters>
                <Button onClick = {handleAll}>Todos</Button>
                <Button onClick = {handleImportante}>Importantes</Button>
                <Button onClick = {handleNotImportant}>Não Importantes</Button>

            </Filters>
            <Counter>
                Total de tarefas: {todos.length}
            </Counter>
        </Principal>
    )
}
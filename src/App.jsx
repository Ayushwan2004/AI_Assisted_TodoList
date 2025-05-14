import React, { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import InputContainer from './components/InputContainer.jsx'
import TaskContainer from './components/TaskContainer.jsx'
import Chatbot from './components/Chatbot.jsx'
import { Paper, Typography, Stack, Chip } from '@mui/material'

function App() {
    const [inputVal, setInputVal] = useState('')
    const [todos, setToDos] = useState([])
    const [suggestions, setSuggestions] = useState([])

    const keywordSuggestions = {
        school: ['Pack lunch', 'Take notebooks', 'Wear uniform'],
        gym: ['Carry water bottle', 'Wear shoes', 'Stretch before workout'],
        office: ['Check emails', 'Bring ID card', 'Plan meetings'],
        study: ['Revise notes', 'Create flashcards', 'Set timer'],
    }

    function writeTodo(e) {
        const value = e.target.value
        setInputVal(value)

        const matchedKey = Object.keys(keywordSuggestions).find((key) =>
            value.toLowerCase().includes(key)
        )

        if (matchedKey) {
            setSuggestions(keywordSuggestions[matchedKey])
        } else {
            setSuggestions([])
        }
    }
    function addTodo() {
        if (inputVal.trim() !== '') {
            setToDos((prevTodos) => [
                ...prevTodos,
                { id: Date.now(), text: inputVal, completed: false }
            ])
            setInputVal('')
            setSuggestions([])
        }
    }
    function addSuggestedTask(task) {
        setToDos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), text: task, completed: false }
        ])
    }

    function toggleDone(id) {
        setToDos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    function deleteTodo(id) {
        setToDos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    function editTodo(id, newText) {
        setToDos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        )
    }

    return (
        <main>
            <Typography variant="h3" align="center" sx={{ mt: 2 }}>
                TodoList
            </Typography>

            <InputContainer
                inputVal={inputVal}
                writeTodo={writeTodo}
                addTodo={addTodo}
            />
            {suggestions.length > 0 && (
                <Chatbot suggestions={suggestions} onClickSuggestion={addSuggestedTask} />
            )}
            <TaskContainer
                todos={todos}
                toggleDone={toggleDone}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </main>
    )
}

export default App

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  TextField
} from '@mui/material'

function TaskContainer({ todos, toggleDone, deleteTodo, editTodo }) {
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
    if (editText.trim() !== '') {
      editTodo(id, editText)
      setEditingId(null)
      setEditText('')
    }
  }

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
      {todos.map((todo) => (
        <Card
          key={todo.id}
          variant="outlined"
          sx={{
            width: '500px',
            bgcolor: todo.completed ? '#f0f0f0' : '#fff',
            transform: todo.completed ? 'scale(0.98)' : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {editingId === todo.id ? (
              <>
                <TextField
                  variant="outlined"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  sx={{ flexGrow: 1, mr: 2 }}
                />
                <Button onClick={() => handleSave(todo.id)}>Save</Button>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'gray' : 'black',
                    flexGrow: 1
                  }}
                >
                  {todo.text}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Button onClick={() => toggleDone(todo.id)} variant="outlined">
                    {todo.completed ? 'Undo' : 'Done'}
                  </Button>
                  <Button onClick={() => handleEdit(todo)} variant="outlined">Edit</Button>
                  <Button onClick={() => deleteTodo(todo.id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </Stack>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}

export default TaskContainer

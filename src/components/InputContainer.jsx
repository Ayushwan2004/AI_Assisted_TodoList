import React from 'react'
import { TextField, Button, Stack } from '@mui/material'

function InputContainer({ inputVal, writeTodo, addTodo }) {
  return (
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <TextField
        label="Enter Task"
        variant="outlined"
        value={inputVal}
        onChange={writeTodo}
        sx={{ width: '40ch' }}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add Task
      </Button>
    </Stack>
  )
}

export default InputContainer

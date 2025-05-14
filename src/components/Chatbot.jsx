import React from 'react'
import { Paper, Typography, Stack, Chip } from '@mui/material'

function Chatbot({ suggestions, onClickSuggestion }) {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2, maxWidth: '500px', mx: 'auto' }}>
      <Typography variant="subtitle1" gutterBottom>
        🤖 Assistant Suggestions:
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {suggestions.map((text, idx) => (
          <Chip
            key={idx}
            label={text}
            onClick={() => onClickSuggestion(text)}
            clickable
            sx={{ mb: 1 }}
            color="primary"
            variant="outlined"
          />
        ))}
      </Stack>
    </Paper>
  )
}

export default Chatbot

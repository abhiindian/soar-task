import './App.css'
import { Container, Box, Typography } from '@mui/material'

function App() {


  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        <Typography variant="h4" component="h1" sx={{ mt: 2 }}>
          Material UI Vite.js example in TypeScript
        </Typography>

      </Box>
    </Container>
  )
}

export default App

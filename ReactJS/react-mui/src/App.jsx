
import ContactForm from './Components/ContactForm';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5d442',
    }
  },
});

function App(){
  return (
    <>  
      {/* <Typography variant='h1' sx={{backgroundColor:"red"}}>This is a heading</Typography> */}

      <ThemeProvider theme={theme}>
        <Navbar />
        <Hero />
        <ContactForm></ContactForm>
      </ThemeProvider>
    </>
  )
}

export default App;
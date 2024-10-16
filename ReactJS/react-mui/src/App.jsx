
import ContactForm from './Components/ContactForm';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Services from './Components/Services';
import ImageSection from './Components/ImageSection';
import Footer from './Components/Footer';


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
        <Services></Services>
        <ImageSection></ImageSection>
        <ContactForm></ContactForm>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App;
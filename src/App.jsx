import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globals';
import { theme } from './styles/themes';
import NavBar from './components/NavBar.component';
import Nav_and_hero from './components/Nav_and_hero.component';
import Info from './components/Info.component';
import MainFeatureBox from './components/MainFeatureBox.component';
import Menu from './components/Menu.component';
import Stats from './components/Stats.component';
import Testimonials from './components/Testimonials.component';
import Contact from './components/Contact.component';
import Footer from './components/Footer.component';
import Some_tabs from './components/some_tabs';
const AppContainer = styled.div``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <NavBar />
        <Nav_and_hero />
        {/* <Hero /> */}
        <Info />
        <MainFeatureBox />
        <Menu />
        <Stats />
        <Testimonials />
        <Contact />
        {/* <Some_tabs /> */}
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

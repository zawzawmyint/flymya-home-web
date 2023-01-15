import { Container } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import WelcomeMsg from "./components/WelcomeMsg";
import SwiperPage from "./components/SwiperPage";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <WelcomeMsg />
        <SwiperPage />
        <Category />
      </Container>
      <Footer />
    </>
  );
}

export default App;

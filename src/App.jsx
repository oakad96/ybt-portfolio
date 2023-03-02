import { About } from "./components/About";
import { ContactMe } from "./components/ContactMe";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Greeting } from "./components/Greeting";
import { NavBar } from "./components/NavBar";
import { ScrollSnapContainer } from "./components/ScrollSnapContainer";
import { Skills } from "./components/Skills";
import aboutImg from "./img/aboutImg.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollSnapContainer>
        <Greeting aboutImg={aboutImg} />
        <About />
        <Experience />
        <Education />
        <Skills />
        <ContactMe />
      </ScrollSnapContainer>
    </div>
  );
}

export default App;

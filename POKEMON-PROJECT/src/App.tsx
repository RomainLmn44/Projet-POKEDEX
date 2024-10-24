import Nav from "./compone/Nav.tsx";
import Cards from "./compone/Card.tsx";
import Footer from "./compone/footer.tsx";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <div>
          <Cards name="Leviator" image="images\leviator.png" />
          <Cards name="Arbok" image="images\arbok.jpg" />
          <Cards name="Tortank" image="images\tortank.png" />
          <Cards name="Insecateur" image="images\insecateur.png" />
          <Cards name="Dracolosse" image="images\dracolosse.jpg" />
          <Cards name="Machopeur" image="images\machopeur.jpg" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

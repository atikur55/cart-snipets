import CartContainer from "./component/CartContainer";
import Nav from "./component/Nav";
import { useGolbalContext } from "./component/context";

function App() {
  const { loading } = useGolbalContext();
  if (loading) {
    return(
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <Nav />
      <CartContainer />
    </main>
  );
}

export default App;

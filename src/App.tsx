import { useAppSelector } from "@hooks/redux";
import Chrome from "@components/Chrome";

function App() {
  const games = useAppSelector((state) => state.games);
  console.log(games);
  return (
    <div className="App">
      <Chrome />
    </div>
  );
}

export default App;

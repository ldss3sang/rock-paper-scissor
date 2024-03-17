import "./App.css";
import { Box } from "./components/Box";
import Geodude from "./assets/Geodude.png";
import Scyther from "./assets/Scyther.png";
import Ditto from "./assets/Ditto.png";
import GeodudeSound from "./assets/geodude.mp3";
import DittoSound from "./assets/ditto.mp3";
import ScytherSound from "./assets/scyther.mp3";
import ThemeSong from "./assets/pokemonTheme.mp3";
import PokemonLogo from "./assets/pokemon-logo.png";
import Pokeball from "./assets/pokeball.png";
import Ichooseyou from "./assets/ichooseyou.mp3";
import { useRef, useState } from "react";

const choice = {
  rock: {
    name: "Geodude",
    image: Geodude,
    sound: GeodudeSound,
  },
  scissor: {
    name: "Scyther",
    image: Scyther,
    sound: ScytherSound,
  },
  paper: {
    name: "Ditto",
    image: Ditto,
    sound: DittoSound,
  },
};

function App() {
  const [start, setStart] = useState(false);
  const [username, setUsername] = useState(null);
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);
  const startSound = useRef(new Audio(ThemeSong));

  const gameStart = () => {
    startSound.current.play();
    setStart(true);
  };

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return choice[itemArray[randomItem]];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.currentTarget[0].value;
    if (inputValue) {
      startSound.current.pause();
      setUsername(event.currentTarget[0].value);
      const ichooseyouSound = new Audio(Ichooseyou);
      ichooseyouSound.play();
    } else {
      alert("Please enter your name");
    }
  };
  return (
    <div className="container">
      <img className="logo" src={PokemonLogo} alt="pokemonlogo" />
      <h1 className="game-title">Rock Paper Scissor</h1>
      {start ? (
        username ? (
          <div className="game-screen">
            <section className="main">
              <Box title={`${username} (YOU)`} item={userSelect} />
              <Box title="Computer" item={computerSelect} />
            </section>
            <section className="buttons">
              <button onClick={() => play("scissor")}>가위</button>
              <button onClick={() => play("rock")}>바위</button>
              <button onClick={() => play("paper")}>보</button>
            </section>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              className="username"
              type="text"
              placeholder="Please Enter your name"
            />
            <button className="pokeball-button" type="submit">
              <img className="pokeball-image" src={Pokeball} />
            </button>
          </form>
        )
      ) : (
        <button className="start-button" onClick={gameStart} type="button">
          Game Start
        </button>
      )}
    </div>
  );
}

export default App;

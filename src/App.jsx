import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import shuffleArray from './utils/shuffleArray'
function App() {
const [pokemonList,setPokemonList]=useState(["pikachu","charmander","bulbasaur","squirtle","eevee","snorlax","gengar","jigglypuff","mewtwo","lucario","charizard","gyarados"])
const [currentPokemon,setCurrentPokemon]=useState("");
const [score,setScore]=useState(0);
const [highestScore,setHighestScore]=useState(0)
//check for highest score
if(score>highestScore){
  setHighestScore(score)
}
//place a card in random position+check for current/highest score after clicking
const handleClick=(e)=>{
  if(e.target.dataset.key===currentPokemon){
   console.log("twice");
   //reset game if click on the same pokemon twice
   setScore(0);
   setCurrentPokemon("");
   return
  }
  setPokemonList(shuffleArray(pokemonList))
  setCurrentPokemon(e.target.dataset.key);
  setScore(score+1);
}
return (
  <>
  <div className='game-info'>
  <h1>Pokémon Memory</h1>
  <p>Don't click the same Pokémon twice.</p>
  <div className="score-board">
    <p>Score:{score} </p>
    <p>Highest score:{highestScore} </p>
  </div>
  </div>
  <div className='pokemon-container'>
    {pokemonList.map(pokemon=> <Card key={pokemon} pokemon={pokemon} handleClick={handleClick}/>)}
  </div>
  
  </>
)
}

export default App

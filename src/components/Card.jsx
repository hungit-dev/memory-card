import { useEffect,useState } from "react";
import fetchData from "../services/api";
import "../styles/Card.css"
function Card({pokemon,handleClick}){
    const [src,setSrc]=useState("");
    useEffect(()=>{
        const fetchSprite=async()=>{
            const sprite=await fetchData(pokemon);
            setSrc(sprite);
        }
        fetchSprite()
    },[pokemon])
    return (
        <>
        <img data-key={pokemon} src={src} onClick={handleClick} alt="pokemon-avatar" />
        </>
    )
}
export default Card
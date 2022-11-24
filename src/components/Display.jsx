import React, { useEffect, useState } from "react";
import { getPokemon , getPokemonData } from "../api/api";
import '../App.css'
import {Pokemon} from "./Pokemon";
import Searchbar from "./Searchbar";



export default function Display() {

	const [url, setUrl] = useState(null)
	const [data, setData] = useState([])
	const [urlNext, setUrlNext] = useState(null)
	const [urlPrev, setUrlPrev] = useState(null)
	
	const fetchData = async (url) => {		
		const pokeData = await getPokemon(url);		
		setUrlNext(pokeData.next);
		setUrlPrev(pokeData.previous);
		const next = pokeData.next;		
		const promises = pokeData.results.map( async (pokemon) =>{
			return await getPokemonData(pokemon.url)
		});
		const results = await Promise.all(promises);
		setData(results);
	}
	const onClickChangePage = (e) => {
		if ('btn-prev' === e.currentTarget.id){
			e.preventDefault()
			setUrl(urlPrev)			
		}
		else if ('btn-next' === e.currentTarget.id){			
			e.preventDefault()
			setUrl(urlNext)
		}
	}


	useEffect(() => {		
		fetchData(url)
		window.scrollTo(0, 0)
	}, [url])

	return <>
		<Searchbar/>	
		<div className="display" >
		{data? data.map( (pokemon) => {
				return(					
					<Pokemon key={pokemon.name} pokemon={pokemon}/>
				)
			})
			:
			<span>Cargando....</span> 			
			}
		</div>
		<div className="button-container">
			{urlPrev?<button id="btn-prev" onClick={onClickChangePage}>{'<'}</button>:<button id="btn-prev" onClick={onClickChangePage} disabled>{'<'}</button>}
			{urlNext?<button id="btn-next" onClick={onClickChangePage}>{'>'}</button>:<button id="btn-next" onClick={onClickChangePage} disabled>{'>'}</button>}
		</div>
	</>
}
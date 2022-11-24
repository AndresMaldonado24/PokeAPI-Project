import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api/api";
import Portal from "./Portal";
import { Overlay, ModalMedium } from "./Modal";
import { PokemonStats } from "./Pokemon";



export default function Searchbar(){
	
	const [search, setSearch] = useState('')
	const [pokemon, setPokemon] = useState();
	const [showModal, setShowModal] = useState(false)

	const onChangeHandle = (e) => {
		setSearch(e.target.value)
	}
	const onClickSearch = async (e) => {			
		if(search.length >= 4){
			const data = await searchPokemon(search)		
			setPokemon(data)
			setShowModal(prev => !prev)
		}	
	}
	const onClickCloseModal = (e) =>{
		setShowModal(prev => !prev)
	}

	return <div className="searchbar-container">			
		<input 
			type="text"
			placeholder="Buscar Pokémon..."
			id="input-search"
			name="input-search"
			onChange={onChangeHandle}
		/>
		<button id="btn-search" onClick={onClickSearch}>🔍</button>
		{
			showModal? 
			<Portal>
				<Overlay
					showModal={onClickCloseModal}/>
				<ModalMedium 
					showModal={onClickCloseModal}>
						<PokemonStats
							pokemon={pokemon}/>
				</ModalMedium>
			</Portal>
			: null
		}		
	</div>
}
import React, { useEffect } from "react";
import { encode } from "base-64";
import DisplayBackgournd from '../assets/img/background-pokemondisplay.jpg'

export function Pokemon(props) {

	const {pokemon} = props	

	return(
		<>		
		<div className="card" id={encode(pokemon.id)}>
			<div className="sprite"><img src={pokemon.sprites.front_default} alt="Sprite Frontal del Pokemon" /></div>
			<div className="name"><span className="number">#{pokemon.id}</span><span className="pokeName">{pokemon.name}</span></div>
			<div className="types">{pokemon.types.map( (type,idx) =>{
				return <span key={idx} className={type.type.name}>{type.type.name}</span>
			})}</div>
		</div>
		</>
	)
}

export function PokemonStats({pokemon}) {

	return (
		<>
			<div className="container">
			<div className="infoContainer">
				<div className="displayColumn">
					<div className="pokemonDisplay">
						<div className="spriteDisplay">
							<img id="displayBackgound" src={DisplayBackgournd} alt="Fondo de un Bosque"/>
							<img id="displaySprite" src={pokemon.sprites.front_default} alt="Sprite Frontal del Pokemon" />
							</div>					
					</div>
					<div className="typeDisplay">
							{pokemon.types.map( (type,idx) =>{
							return <span key={idx} className={type.type.name}>{type.type.name}</span>
							})}
					</div>
				</div>
				<div className="statsDisplay">
					<div className="statsDisplayTitle">BASE STATS</div>
					{pokemon.stats.map( (stat,idx) => {
						return <>
						<div id="statContainer" key={idx}>
							<span className="stateName">{stat.stat.name.toUpperCase()}</span>
							<span className="stateNumber">{stat.base_stat}</span>
						</div>
						</>
					})}
				</div>
			</div>
			<div className="dataContainer">
				<div className="double"></div>
				<div className="half"></div>
				<div className="none"></div>
			</div>
			</div>
		</>
	)
}
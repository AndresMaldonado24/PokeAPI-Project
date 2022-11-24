export async function searchPokemon(pokemon){
	let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
	const res = await fetch(url);
	const data = await res.json();

	return data;
}

export async function getPokemon(url,sizePage){
	if(!url){
		url = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`
	}
	let controller = new AbortController();	
	try{
		const res = await fetch(url,{ signal: controller.signal});
		const data = await res.json();
		return data;
	}catch(err){
		if (err.name == 'AbortError'){
			alert("Aborted!");
		} else {
			throw err;
		}
	}
}

export async function getPokemonData(url){
	let controller = new AbortController();	
	try{
		const res = await fetch(url,{ signal: controller.signal});
		const data = await res.json();
		return data;
	}catch(err){
		if (err.name == 'AbortError'){
			alert("Aborted!");
		} else {
			throw err;
		}
	}	
}
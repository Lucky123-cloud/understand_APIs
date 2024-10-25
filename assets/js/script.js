async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const displayDiv = document.getElementById('pokemonDisplay');

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new error('Pokemon not found');
        }

        const data = await response.json();
        displayDiv.innerHTML = `
        <h2> ${data.name.toUpperCase()}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
        <p>Type: ${data.types.map(typeinfo => typeinfo.type.name).join(', ')}</p>`;
    } catch (error) {
        displayDiv.innerHTML = `<p>${error.message}</p>`;
    }
}
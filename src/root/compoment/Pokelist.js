const PokeList = ()=>{
    const Pokemons = [
        {name: 'Pikachu', type:'Electrique', desc:'Sourie électrique'},
        {name: 'Bulbizarre', type:'Plante', desc:'Pokemon jeune pousse'},
        {name: 'Salameche', type:'Feu', desc:'Lezard de feu'},
        {name: 'Carapuce', type:'Eau', desc:'Tortue aquatique'},
    ];
    
    return (
    <>
        {Pokemons.map((pokemon)=><p><a href={'/pokemon/'+pokemon.name+'/'+pokemon.type+'/'+pokemon.desc}>{pokemon.name}</a></p>)}
    </>
    )
}
export default PokeList;
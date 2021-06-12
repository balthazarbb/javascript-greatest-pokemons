// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const getAllFirePokemons = (pokemons)=>{
    // to filter only the pokemons that include the "Fire" String within their types (type is an array)
    const firePokemons = pokemons.filter(eachPoke =>{
        if (eachPoke.type.includes("Fire")){
            return true
        }
    })
    return firePokemons // return newarray
}

  
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
const shortestPokemon = (pokemons)=>{
    if (!pokemons.length) return 0;
    //create 2 variables to help loop check the correct pokemons
    let shortestPokeName = "" //initialized empty string
    let shortestPokeHeight = Infinity //initialized as Infinity 
    //as we are trying to get the lowest value
    //iterate over all pokemons to find the shortest one
    pokemons.forEach(eachPoke => {
        //modify height from string to number
        // pokemon.height is a String). The .split will convert the string into an array with two elements that were separated by a " ". ["0.71", "m"]
        //const heightSplit = eachPoke.height.split(" ")
        //target first elem of the arrray
        //const heightAsString = heightSplit[0]
        //convert string to number
        //const heightAsNum = Number(heightAsString)

        //one linger instead of the three const´s before
        const heightAsNum = Number(eachPoke.height.split(" ")[0])

        //if current pokemons height is lower than the default variable shortestPokeHeight then...
        if (heightAsNum < shortestPokeHeight){
            shortestPokeHeight = heightAsNum //...update default height variable with current pokemon height
            shortestPokeName = eachPoke.name //...update default name with current name
        }
    })
    return shortestPokeName // returns last name the forEach found to be shortest

}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
const candyAverage = (pokemons)=>{
    if (!pokemons.length) return 0; // pass testcase if array is empty
    //reduce will sum all the candy_count of each pokemon only if the attribute exists
    const candyAvg = pokemons.reduce((acc, eachPoke)=>{
        if (eachPoke.candy_count){
            return acc + eachPoke.candy_count
        }else{
            return acc
        }
    }, 0) / pokemons.length //at the  end we divide the sum between the length of the array
    const candyAvgTwoDigits = Number(candyAvg.toFixed(2))//toFixed(2) to get only the first two decimals, Number to convert string to number
    return candyAvgTwoDigits //return the number
}
// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 

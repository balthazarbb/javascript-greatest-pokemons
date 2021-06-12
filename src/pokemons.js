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
const getGroundPokeImg = (pokemons) => {

    if (!pokemons.length) return 0; // condition to pass test in case array is empty
  
    // filter will create a new array only with the Ground type
    const groundPokemons = pokemons.filter(eachPoke => {
      return eachPoke.type.includes("Ground") // we use .includes because eachPoke.type is an array
    })
  
    // map will create a new array but only with the image urls. No pokemon objects.
    const groundPokeImages = groundPokemons.map(eachPoke => {
      return eachPoke.img
    })
  
    // slice will create a new array only with the first 10 elements
    const tenGroundPokeImages = groundPokeImages.slice(0, 10)
  
    // a short way to chain all 3 methods above (filter, map, slice) in a single line
    // const firstTwenty = pokemons.filter(eachPoke => eachPoke.type.includes("Ground")).map(eachPoke => eachPoke.img).slice(0, 10)
  
    return tenGroundPokeImages // return the new array
  }

// Iteration 5: Find all pokemon names heavier than Pikachu
const getHeavyPokemons = (pokemons)=>{
    if (!pokemons.length) return 0

    //next 3 lines to get the weight of pikachu
    const pikachuArr = pokemons.filter(eachPoke => eachPoke.name === "Pikachu") // filter to get an array with the pikachu object
    const pikachu = pikachuArr[0] //  to get pikachu object
    const pikachuWeight = Number(pikachu.weight.split(" ")[0])//same like in Iteration 2
    
    // filter to get only the pokemons heavier than pikachu
    const heavyPokemons = pokemons.filter(eachPoke => {
        const pokemonWeight = Number(eachPoke.weight.split(" ")[0]) //same approach we did in iteration 2
        return pokemonWeight > pikachuWeight // return a boolean and add the element only if true
    })
    const heavyPokeNames = heavyPokemons.map(eachPoke => eachPoke.name) // map to get a new array only eith the names
    return heavyPokeNames // return new array
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
const orderAlphabetically = (pokemons)=>{
    let pokemonsCopy = JSON.parse(JSON.stringify(pokemons)) //deep copy the array. Since we will use sort, we don't want to mutate original data
    // .sort to sort by name
    pokemonsCopy.sort ((a, b)=>{
        //when the statement of the conditionals is one line, it is also accepted to write code like this
        if (a.name > b.name) return 1
        else if (a.name < b.name) return -1
        else return 0

        // or using localeCompare is also acceptable for the sort method. The code below does the same as the 3 lines above
        // return a.name.localeCompare(b.name)
    })

    const sortedPokeNames = pokemonsCopy.map(eachPoke => eachPoke.name) // map to get the names
    const firstTwentySortedPokeNames = sortedPokeNames.slice(0, 20) // slice to show only the first 20 names

    return firstTwentySortedPokeNames
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
const strongPokemons = (pokemons)=>{
    //filter to create an array only with pokemons with 1 element in the weakness array
    const oneWeakPokemons = pokemons.filter(eachPoke =>{
        return eachPoke.weaknesses.length === 1
    })
    const oneWeakPokeNames = oneWeakPokemons.map(eachPoke => eachPoke.name)// map to get the names
    const firstFifteenOneWeakPokeNames = oneWeakPokeNames.slice(0, 15) // splice to get the first 15 names

    return firstFifteenOneWeakPokeNames
}
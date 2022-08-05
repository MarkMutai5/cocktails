import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Grid} from '@mui/material'
import Cocktail from './Cocktail'

function Main() {

    const [cocktails, setCocktails] = useState([ ])


    const url1 = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

    useEffect(() => {
        getCocktail();
    }, [url1])

    const getCocktail = () => {
        axios.get(url1)
        .then((response) =>{ 
            console.log(response)
            setCocktails(response.data.drinks)
        }
           
        )
    }
  return (
    <>
        <button onClick={getCocktail}>GET</button>

        <Grid container justifyContent = 'center' spacing = {4}>
            {cocktails.map((cocktail) => (
                <Grid item key = {cocktail.idDrink} xs = {12} sm = {6} md = {4} lg={3}>
                    <Cocktail cocktail = {cocktail}/>
                </Grid>
                
            
            ))}
        </Grid>
        
    </>
  )
}

export default Main
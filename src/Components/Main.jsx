import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Grid, TextField} from '@mui/material'
import Cocktail from './Cocktail'
import './style.css'

function Main() {

    const [cocktails, setCocktails] = useState([ ])
    const [searchTerm, setSearchTerm] = useState(" ")


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
        <div className="container">
            <TextField type = "text" margin = 'normal' label = 'Search...' 
            onChange={event => (setSearchTerm(event.target.value))}/>
        </div>
        

        <Grid container justifyContent = 'center' spacing = {4}>
            {cocktails.filter((val) => {
                 if (searchTerm === " "){
                    return val
                }
                else if (val.strDrink.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
               {/* else(val.strIngredient1.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }*/}
            }).map((cocktail) => (
                <Grid item key = {cocktail.idDrink} xs = {12} sm = {6} md = {4} lg={3}>
                    <Cocktail cocktail = {cocktail}/>
                </Grid>
                
            
            ))}
        </Grid>
        
    </>
  )
}

export default Main
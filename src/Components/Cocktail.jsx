import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Cocktail({cocktail}) {
  return (
    <>
        
        <Card style = {{marginTop: 10}} onClick = {() => console.log("clicked")}>
            <CardMedia
                component = "img"
                image = {cocktail.strDrinkThumb}
                alt = "cocktail pic"
            />
            <CardContent>
                <Typography gutterBottom variant = "h5">
                    {cocktail.strDrink}
                </Typography>
                <Typography gutterBottom variant = "h6">
                    Ingredients
                </Typography>
                <Typography gutterBottom variant = "body2">
                    <ol>
                        <li>{cocktail.strIngredient1}</li>
                        <li>{cocktail.strIngredient2}</li>
                        <li>{cocktail.strIngredient3}</li>
                    </ol>
                </Typography>
                <Typography gutterBottom variant = "body2">
                    {cocktail.strInstructions}
                </Typography>
            </CardContent>
        </Card>
        
    </>
  )
}

export default Cocktail
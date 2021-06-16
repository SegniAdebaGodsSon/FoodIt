import React from 'react'
import { Container, Form, Button, Card,      } from 'react-bootstrap'
import NewRecipe  from '../components/recipes/NewRecipe'
import classes from './AddRecipe.module.css'
import { useRef } from 'react'
let URL_POST = ``;



function AddRecipe() {
        
    function addRecipeHandler(formData){
        
        console.table(formData)

        fetch(URL_POST, 
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        })
        .then(response => response.json())
        .then(json => console.log(json))
        
    }

    return (
        <NewRecipe onAddRecipe={addRecipeHandler}/>
    )
}

export default AddRecipe

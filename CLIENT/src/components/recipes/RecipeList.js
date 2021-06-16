import RecipeItem from './RecipeItem'
import classes from './RecipeList.module.css'

function RecipeList(props) {
    return (
        <ul className={classes.list}>
            {
            props.recipes.map(recipe => (
                <RecipeItem 
                    key={recipe.id} 
                    id={recipe.id}
                    title={recipe.title}
                    image={recipe.image}
                    description={recipe.description}
                    rating={recipe.rating}
                    recipe={recipe.recipe}
                    ratingCount={recipe.ratingCount}
                />))
            }
        </ul>
    )
}

export default RecipeList

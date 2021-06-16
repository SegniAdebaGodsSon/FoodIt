import Post from './Post'
import classes from './PostsList.module.css'
import { Container } from 'react-bootstrap'

function RecipeList(props) {
    return (
        <Container>
            <ul className={classes.list}>
                {
                props.recipes.map(recipe => (
                    <Post 
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
        </Container>
    )
}

export default RecipeList

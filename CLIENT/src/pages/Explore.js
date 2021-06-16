import { useState, useEffect } from 'react'
import RecipeList from '../components/recipes/RecipeList' 
import Search from '../components/page-components/Search'
import { Container, Spinner } from 'react-bootstrap'
import { data } from 'jquery'
const URL_ALL = `http://127.0.0.1:5000/api/Recipes`;
const URL_SEARCH = ` `;

const DUMMY_DATA = [
    {
        id: 12,
        title: 'Food 1',
        rating: 5,  
        ratingCount: 43,
        image: 'https://noobpreneur.com/wp-content/uploads/2017/02/ASP-NET.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: "Impedit accusamus voluptas ut consequatur rerum. Cum a qui quis neque voluptatem est. Quos eos vitae similique sit illo dolorem in eius.Et ad distinctio molestiae eum quod rerum cumque fugiat. Sint facere enim enim et. Quisquam quibusdam aliquid sunt. Et ut vel et omnis. Assumenda praesentium commodi accusantium corrupti quo vitae magnam est. Nisi deleniti vero veniam.Vitae et molestiae ut voluptate quia eos. Est est quaerat dolorem. Quo blanditiis dolor et. Sapiente voluptatem reiciendis porro nesciunt distinctio odio."
    },
    {
        id: 13,
        title: 'Tibs',
        rating: 2,
        ratingCount: 4223,
        image: 'https://noobpreneur.com/wp-content/uploads/2017/02/ASP-NET.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: "Impedit accusamus voluptas ut consequatur rerum. Cum a qui quis neque voluptatem est. Quos eos vitae similique sit illo dolorem in eius.Et ad distinctio molestiae eum quod rerum cumque fugiat. Sint facere enim enim et. Quisquam quibusdam aliquid sunt. Et ut vel et omnis. Assumenda praesentium commodi accusantium corrupti quo vitae magnam est. Nisi deleniti vero veniam.Vitae et molestiae ut voluptate quia eos. Est est quaerat dolorem. Quo blanditiis dolor et. Sapiente voluptatem reiciendis porro nesciunt distinctio odio."
    },
    {
        id: 14,
        title: 'Kitfo',
        rating: 3,
        ratingCount: 453,
        image: 'https://noobpreneur.com/wp-content/uploads/2017/02/ASP-NET.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: "Impedit accusamus voluptas ut consequatur rerum. Cum a qui quis neque voluptatem est. Quos eos vitae similique sit illo dolorem in eius.Et ad distinctio molestiae eum quod rerum cumque fugiat. Sint facere enim enim et. Quisquam quibusdam aliquid sunt. Et ut vel et omnis. Assumenda praesentium commodi accusantium corrupti quo vitae magnam est. Nisi deleniti vero veniam.Vitae et molestiae ut voluptate quia eos. Est est quaerat dolorem. Quo blanditiis dolor et. Sapiente voluptatem reiciendis porro nesciunt distinctio odio."
    },
    {
        id: 15,
        title: 'title',
        rating: 3,
        ratingCount: 145,
        image: 'https://noobpreneur.com/wp-content/uploads/2017/02/ASP-NET.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: "Impedit accusamus voluptas ut consequatur rerum. Cum a qui quis neque voluptatem est. Quos eos vitae similique sit illo dolorem in eius.Et ad distinctio molestiae eum quod rerum cumque fugiat. Sint facere enim enim et. Quisquam quibusdam aliquid sunt. Et ut vel et omnis. Assumenda praesentium commodi accusantium corrupti quo vitae magnam est. Nisi deleniti vero veniam.Vitae et molestiae ut voluptate quia eos. Est est quaerat dolorem. Quo blanditiis dolor et. Sapiente voluptatem reiciendis porro nesciunt distinctio odio."
    },
    {
        id: 16,
        title: 'title',
        rating: 4,
        ratingCount: 66,
        image: 'https://noobpreneur.com/wp-content/uploads/2017/02/ASP-NET.jpg',
        recipe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: "Impedit accusamus voluptas ut consequatur rerum. Cum a qui quis neque voluptatem est. Quos eos vitae similique sit illo dolorem in eius.Et ad distinctio molestiae eum quod rerum cumque fugiat. Sint facere enim enim et. Quisquam quibusdam aliquid sunt. Et ut vel et omnis. Assumenda praesentium commodi accusantium corrupti quo vitae magnam est. Nisi deleniti vero veniam.Vitae et molestiae ut voluptate quia eos. Est est quaerat dolorem. Quo blanditiis dolor et. Sapiente voluptatem reiciendis porro nesciunt distinctio odio."
    }
]


function Explore() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedRecipes, setLoadedRecipes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(URL_ALL)
        .then( response => response.json())
        .then( data => {
            const recipes = [];
            for(const key in data){
                const meetup = {
                  id: key,
                  ...data[key]
                }
                recipes.push(meetup);
            }

            console.log(recipes)


          setIsLoading(false);
          setLoadedRecipes(recipes);
        })

    }, [])

    function searchByKeywordHandler(keyword){
        if(keyword === "") return;
        // search
        loadedRecipes.filter(recipe => recipe.title.includes(keyword));
    }

    if(isLoading){
        return (
            <>
                <Container>
                    <Spinner style={{fontSize: '4em'}} animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Container>
            </>
        )
    }
    return (
        <div style={{marginTop: '4em'}}>    
            <Container>
                <Search search={searchByKeywordHandler}/>
            </Container>

            <RecipeList recipes={loadedRecipes} />
        </div>
    )
}

export default Explore

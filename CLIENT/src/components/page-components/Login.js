import $ from 'jquery';
import { useEffect } from 'react';
import classes from './Login.module.css'
function Login() {
    
    function signInClickHandler(){
    }
    
    return (
        <div>
            <section className={classes.sign_in}>
                <div className={classes.main_page}>
                    <div className={classes.top_bar}></div>	
                    <div className={classes.name}>
                        <h1>Recipe</h1>
                        <p>Sign in and Discover world of recipes</p>
                    </div>
                    <div className={classes.form_btns}>
                        <button className={classes.s_btn}>Sign In</button>

                        <a href="#" className={classes.new_btn}>New Account ?</a>
                    </div>
                    <div className={classes.cancel}>
                        <a href="/"><i className={ ["fas fa-times ", classes.cancel].join("") }></i></a>
                    </div>

                    <div className={classes.sign_in_page}>
                        <form>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button  onClick={signInClickHandler}>Sign In</button>
                        </form>	
                    </div>

                    <div className={classes.sign_up_page}>
                        <form>
                        <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <input type="password" placeholder="Repeat Password"/>
                            <button>Sign Up</button>
                        </form>	
                    </div>
                </div>
            </section>
            <div className={classes.bg_circule}></div>
            
        </div>
    )
}

    /*For Sign In*/
$(document).on('click',`.${classes.s_btn}`,function(){
	$(`.${classes.sign_in}`).addClass(`${classes.active_sign_in}`).siblings(`.${classes.sign_in}`).removeClass(`${classes.active_sign_up}`)
    console.log('Login');
});		

	/*For Sign up*/
$(document).on('click',`.${classes.new_btn}`,function(){
	$(`.${classes.sign_in}`).addClass(`${classes.active_sign_up}`).siblings(`.${classes.sign_in}`).removeClass(`${classes.active_sign_in}`)
    console.log('Create New Account');
});	

	/*For Go Back To Main Page*/
  $(document).ready(function(){
	    $(`${classes.cancel} a`).click(function(){
		    $(`${classes.signin}`).removeClass(`${classes.active_sign_in}, ${classes.active_sign_up}` )
 
	    })
 });


export default Login

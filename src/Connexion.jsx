import React, {useState} from "react";

export const Connexion = (props) => {
    const [email, setEmail] = useState('');
    const  [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }


    return (
        <>
        <div className = "auth-form-container">
        <form className ="connexion-form" onSubmit = {handleSubmit}>
            
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail (e.target.value)} type ="email" placeholder="votre_email@gmail.com" id="email" name="email"></input>
           
            <label htmlFor="password">Mot de passe</label>
            <input value={pass} onChange={(e) => setPass (e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
            
            <button onClick ={() => alert("Vous êtes connexté")} type="submit">Se connecter</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('inscription')}>Pas encore de compte ? Créez en un ici</button>
        <a href="https://www.sidaction.org/"><img id="LogoSIDA" src="LogoSIDA.png" alt="Logo du SIDA"></img></a>
        </div>
        </>
    )
    
}

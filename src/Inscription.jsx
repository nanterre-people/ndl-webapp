import React, {useState} from "react";

export const Inscription = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <div className = "auth-form-container">
        <form className ="inscription-form"onSubmit={handleSubmit}>
            <label htmlFor="name">Prénom</label>
            <input value={name} onChange={(e) => setName (e.target.value)} name="name" id="name" placeholder="Prénom" type="text"></input>
            
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail (e.target.value)} type ="email" placeholder="votre_email@gmail.com" id="email" name="email"></input>
           
            <label htmlFor="password">Mot de passe</label>
            <input value={pass} onChange={(e) => setPass (e.target.value)} type="password" placeholder="********" id="password" name="password"></input>
            
            <button onClick ={() => alert("Vous êtes enregistré")} type="submit">S'enregistrer</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('connexion')}>Vous avez déja un compte ? Connectez vous ici</button>
        <a href="https://www.sidaction.org/"><img id="LogoSIDA" src="LogoSIDA.png" alt="Logo du SIDA"></img></a>
        </div>
        </>
    )
}


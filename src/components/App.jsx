import React from 'react';
import "../styles/global.scss"
const App = () => {
    return (

           // para que funcione es necesario que 
           // ambos elementos deben estar anidados en un elemento
           // puede ser otro div o como en este caso el parrafo
           // esta anidaddo en un titulo 
            
                <h1>Hola Mundo!<p> parrafo anidado en un h1</p></h1>
                        
    );
}

export default App;
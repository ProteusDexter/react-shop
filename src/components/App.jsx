import React from 'react';
import "../styles/global.scss"
const App = () => {
    return (

           // para que funcione es necesario que 
           // ambos elementos deben estar anidados en un elemento
           // puede ser otro div o como en este caso el parrafo
           // esta anidaddo en un titulo 
            <div>
                <h1>Hola Mundo!<p> parrafo anidado en un h1</p></h1>
                <p> le dimos estilo al background en color rojo y al texto en negro</p>
            </div>            
    );
}

export default App;
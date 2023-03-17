import React from "react";
import CardCharacters from "../CardCharacter/CardCharacter";
const heroes = [
    {
        url:'./img/strange.jpg',
        nombre:'Doctor Strange',
        descripcion: 'Stephen Strange es un médico especializado en neurocirugía, codicioso y egocéntrico, que solo se preocupa por la riqueza de su carrera, hasta que en un accidente sufrió una enfermedad nerviosa en sus manos que le obligó a retirarse.'
    },
    {
        url:'./img/anakin.jpg',
        nombre:'Anakin',
        descripcion: 'Anakin Skywalker, un hombre humano sensible a la Fuerza, fue un Caballero Jedi de la República Galáctica y el Elegido de la Fuerza. Durante las Guerras Clon, sus logros como comandante en el campo de batalla le valieron el apodo del Héroe Sin Miedo.'
    },
    {
        url:'./img/batman.jpg',
        nombre:'Batman',
        descripcion: 'Batman es un hombre alto, caucásico, tiene una figura oscura e imponente, posee con cabello negro corto y ojos marrones. Él lleva un traje gris oscuro con el símbolo negro de un murciélago, en medio de el pecho. Batman también usa una capucha negra que lo cubre en todo momento para ocultar su identidad.'
    },
    {
        url:'./img/capAmerica.jpg',
        nombre:'Capitan America',
        descripcion: 'Sentidos, agilidad, velocidad y fuerza sobrehumanas. Gran habilidad con su escudo. Instinto de liderazgo, gran resistencia, inmune a gases y enfermedades, curación y regeneración acelerada. Genio táctico, artista marcial, acróbata experto'
    },
    {
        url:'./img/cell.jpg',
        nombre:'Cell',
        descripcion: 'Cell en su primera forma tiene una apariencia similar a una mantis religiosa humanoide, posee una coraza en su cabeza con dos cuernos horizontales, y una larga cola. En el manga solo posee tres dedos, mientras que en el anime aparece con cinco dedos en las manos y tres en los pies.'
    },
    {
        url:'./img/vegetta.jpg',
        nombre:'Vegeta',
        descripcion: 'Vegeta es el príncipe de una raza guerrera extraterrestre conocida como los Saiyajin. Es extremadamente arrogante, orgulloso y trabajador; constantemente se refiere a su herencia y estatus real a lo largo de la serie.'
    },
    {
        url:'./img/yoda.jpg',
        nombre:'Yoda',
        descripcion: 'Yoda es un personaje ficticio del universo de Star Wars, era uno de los más renombrados y poderosos maestros Jedi durante toda la historia de la Galaxia, y uno de los pocos Jedis de la República Galáctica en sobrevivir hasta la Guerra Civil Galáctica.'
    },
    {
        url:'./img/superman.jpg',
        nombre:'Superman',
        descripcion: 'Superman es un hombre alto, musculoso, hombre de raza blanca con ojos azules y pelo negro corto con un rizo. Superman, siempre lleva su uniforme azul con su famoso rojo y amarillo escudo de S en el pecho, un cinturón amarillo, botas rojas y una capa roja.'
    },
]

function Characters(){
    return(
        <div className="characters">
            {
                heroes.map((heroe, idx)=> 
                <CardCharacters
                    url={heroe.url}
                    nombre={heroe.nombre}
                    descripcion={heroe.descripcion}
                    key={heroe.nombre + idx}
                />)
            }
           
        </div>
    )
}

export default Characters
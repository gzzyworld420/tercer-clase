import React from "react";
import Card from "../Card/Card";

const tarjetas = [
    {
        tituloCard: 'Mas buscadas'
    },
    {
        tituloCard: 'Drama'
    },
    {
        tituloCard: 'Comedia'
    }
]


function ContenedorCards(){
    return(
        <section className="top-data">

            {
                tarjetas.map((tarjeta, idx) => 
                <Card key={tarjeta.tituloCard + idx} tituloCard={tarjeta.tituloCard}/>

                )

                
            }

            





            {/* <Card tituloCard='Mas buscadas'/>
            <Card tituloCard='Drama'/>
            <Card tituloCard='Comedia'/> */}


        </section>
    )
}
export default ContenedorCards
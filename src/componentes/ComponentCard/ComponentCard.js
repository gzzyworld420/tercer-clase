import React from 'react';
import Card from '../Card/Card';

const ComponentCard = () => {

    return (
        <section className='container'>
            <Card 
            img = './img/ahsoka.jpg'
            tituloCard = 'Ahsoka' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/anakin.jpg'
            tituloCard = 'Anakin' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/batman.jpg'
            tituloCard = 'Batman' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/capAmerica.jpg'
            tituloCard = 'Capitan America' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/cell.jpg'
            tituloCard = 'Cell' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/hulkSmall.jpg'
            tituloCard = 'Hulk' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/kyloRen.jpg'
            tituloCard = 'Kylo Ren' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            <Card 
            img = './img/superman.jpg'
            tituloCard = 'Superman' 
            description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            anchor = 'Ver más'
            />

            
        </section>
    )

};

export default ComponentCard;
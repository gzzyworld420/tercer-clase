import React, {Component }from "react";

class CardCharacters extends Component {

    constructor (props) {
        super(props) 
        this.state = {
            contador: 1,
            texto: 'Ver mas'
        }
    }

    // saludar (nombre) {
    //     alert('Buen dia ' + nombre)
    // }

    // contador () {
    //     this.setState({
    //         contador: this.state.contador + 1
    //     })
    // }

    cambiarTexto () {
        if (this.state.texto === 'Ver mas') {
            this.setState({
                texto: 'Ver menos'
            })
        } else {
            this.setState({
                texto: 'Ver mas'
            })
        }
    }


    render () {
    return(
    <div className="character-card" onClick= { (nombre) => this.saludar('bruno')}>
        <img src={this.props.url} alt="Imagen Trabajo" className="logo"/>
        <h1>{this.state.contador}</h1>
        <button onClick={() => this.props.aumentar()}>Aumentar</button>
        {/* <button onClick={() => this.decrementar()}>Disminuir</button> */}
        <h4>{this.props.nombre}</h4>
        <p>{this.props.descripcion}</p>
        <a 
        onClick={() => this.cambiarTexto()}
        href="./">{this.state.texto}</a>
    </div>

    

)
    }
}

export default CardCharacters
import { useState } from "react";

const Formulario = ()=>{
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    const CalculaIMC = ()=>{
        const imc = peso / (altura * altura);

        if (!peso || !altura) {
            return null;  // Retorna nulo se o peso ou a altura não foram informados
        }
    

        if(imc <= 18.5){
            return (
                <p>
                    Abaixo do peso
                </p>
            )
        } else if(18.8>= imc <=24.9 ){
            return (
                <p>
                    Peso ideal (Parabéns)
                </p>
            )
        } else if(25>= imc <=29.9 ){
            return (
                <p>
                    Levemente acima do peso
                </p>
            )
        } else if(30>= imc <=34.9 ){
            return (
                <p>
                    Obesidade grau I
                </p>
            )
        } else if(35>= imc <=39.9 ){
            return (
                <p>
                    Obesidade grau II (severa)
                </p>
            )
        } else if(40>= imc ){
            return (
                <p>
                    Obesidade grau III (mórbida)
                </p>
            )
        } 
    }

    return (
        <form>
            <label htmlFor="#peso">Peso <br /></label>
            <input type="number"id="peso" placeholder="Digite o seu peso" onChange={evento => setPeso(evento.target.value)}/> <br/>
            <label htmlFor="#altura">Altura <br /></label>
            <input type="number" id="altura" placeholder="Digite a sua altura" onChange={evento=> setAltura(evento.target.value)}/>
            
            <h3>Resultado : <br /></h3>
            {CalculaIMC()}
        </form>
    )
}
export default Formulario
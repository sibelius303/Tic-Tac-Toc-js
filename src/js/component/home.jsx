import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ jugador, setJugador] = useState("O");
	const [ cuadricula1, setCuadricula1] = useState("");
	const [ cuadricula2, setCuadricula2] = useState("");
	const [ cuadricula3, setCuadricula3] = useState("");
	const [ cuadricula4, setCuadricula4] = useState("");
	const [ cuadricula5, setCuadricula5] = useState("");
	const [ cuadricula6, setCuadricula6] = useState("");
	const [ cuadricula7, setCuadricula7] = useState("");
	const [ cuadricula8, setCuadricula8] = useState("");
	const [ cuadricula9, setCuadricula9] = useState("");
	const [ color, setColor] = useState('');

	const handleClick1 = () => {
		if (jugador === 'O') {
			setCuadricula1('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula1('X')
			setJugador('O')
		}

	}

	const handleClick2 = () => {
		if (jugador === 'O') {
			setCuadricula2('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula2('X')
			setJugador('O')
		}

	}

	const handleClick3 = () => {
		if (jugador === 'O') {
			setCuadricula3('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula3('X')
			setJugador('O')
		}

	}

	const handleClick4 = () => {
		if (jugador === 'O') {
			setCuadricula4('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula4('X')
			setJugador('O')
		}

	}

	const handleClick5 = () => {
		if (jugador === 'O') {
			setCuadricula5('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula5('X')
			setJugador('O')
		}

	}

	const handleClick6 = () => {
		if (jugador === 'O') {
			setCuadricula6('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula6('X')
			setJugador('O')
		}

	}

	const handleClick7 = () => {
		if (jugador === 'O') {
			setCuadricula7('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula7('X')
			setJugador('O')
		}

	}

	const handleClick8 = () => {
		if (jugador === 'O') {
			setCuadricula8('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula8('X')
			setJugador('O')
		}

	}

	const handleClick9 = () => {
		if (jugador === 'O') {
			setCuadricula9('O')
			setJugador('X')
		} else if (jugador === 'X'){
			setCuadricula9('X')
			setJugador('O')
		}

	}

	const reiniciarCuadriculas = () => {
		setCuadricula1("")
		setCuadricula2("")
		setCuadricula3("")
		setCuadricula4("")
		setCuadricula5("")
		setCuadricula6("")
		setCuadricula7("")
		setCuadricula8("")
		setCuadricula9("")
	}

	const handleWinHorizontal = () => {
		if (cuadricula1 === "O" && cuadricula2 === "O" && cuadricula3 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
			
		} else if (cuadricula1 === "X" && cuadricula2 === "X" && cuadricula3 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
			
		} else if (cuadricula4 === "O" && cuadricula5 === "O" && cuadricula6 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
		} else if (cuadricula4 === "X" && cuadricula5 === "X" && cuadricula6 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
		} else if (cuadricula7 === "O" && cuadricula8 === "O" && cuadricula9 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
		} else if (cuadricula7 === "X" && cuadricula8 === "X" && cuadricula9 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
		}
	}

	handleWinHorizontal();

	const handleWinVertical = () => {
		if (cuadricula1 === "O" && cuadricula4 === "O" && cuadricula7 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
			
		} else if (cuadricula1 === "X" && cuadricula4 === "X" && cuadricula7 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
			
		} else if (cuadricula2 === "O" && cuadricula5 === "O" && cuadricula8 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
		} else if (cuadricula2 === "X" && cuadricula5 === "X" && cuadricula8 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
		} else if (cuadricula3 === "O" && cuadricula6 === "O" && cuadricula9 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
		} else if (cuadricula3 === "X" && cuadricula6 === "X" && cuadricula9 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
		}
	}

	handleWinVertical();

	const handleWinDiagonal = () => {
		if (cuadricula3 === "O" && cuadricula5 === "O" && cuadricula7 === "O") {
			alert("Gana O");
			reiniciarCuadriculas();
			
		} else if (cuadricula3 === "X" && cuadricula5 === "X" && cuadricula7 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
			
		} else if (cuadricula1 === "O" && cuadricula5 === "O" && cuadricula9 === "O") {
			alert("Gana O")
			reiniciarCuadriculas();
		} else if (cuadricula1 === "X" && cuadricula5 === "X" && cuadricula9 === "X") {
			alert("Gana X")
			reiniciarCuadriculas();
		} 
	}

	handleWinDiagonal();

	return (
		<div className="appContainer">
			<h1>Turno de {jugador}</h1>
			<div className="container">
				<div className={color} onClick={handleClick1}><h1 className="simbolo">{cuadricula1}</h1></div>
				<div className={color} onClick={handleClick2}><h1 className="simbolo">{cuadricula2}</h1></div>
				<div className={color} onClick={handleClick3}><h1 className="simbolo">{cuadricula3}</h1></div>
				<div className={color} onClick={handleClick4}><h1 className="simbolo">{cuadricula4}</h1></div>
				<div className={color} onClick={handleClick5}><h1 className="simbolo">{cuadricula5}</h1></div>
				<div className={color} onClick={handleClick6}><h1 className="simbolo">{cuadricula6}</h1></div>
				<div className={color} onClick={handleClick7}><h1 className="simbolo">{cuadricula7}</h1></div>
				<div className={color} onClick={handleClick8}><h1 className="simbolo">{cuadricula8}</h1></div>
				<div className={color} onClick={handleClick9}><h1 className="simbolo">{cuadricula9}</h1></div>
			</div>

		</div>
	);
};

export default Home;

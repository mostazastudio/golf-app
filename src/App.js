import React, {useState, useEffect} from 'react';
import {Swing} from "./components/swing";
import {Form} from "./components/form";
import {Card} from "./components/card";
import './App.css';


function App() {

  const [swings, setSwings] = useState([])

  // Con  este Usefeect le estoy pidiendo que revise en el local storage si hay data en swings para mostrarla
  useEffect(()=>{
    let data = localStorage.getItem("swings");
    if(data!= null){
      setSwings(JSON.parse(data))
    }else{
      setSwings([])
    };
  },[]);
// Con este Useffect le estoy pidiendo que guarde la data en el local storage en swings
  useEffect(()=>{
    localStorage.setItem("swings",JSON.stringify(swings));
  },[swings]);



  const addSwing = (golpe, distancia) => {
    const newSwing = {
      id: swings.length,
      golpe: golpe,
      distancia: distancia
    };

    setSwings([...swings, newSwing])
  }

  const numeroGolpes = (data) => {
    return data.length
  };

  const porcetnajeGolpes = (data) => {
    var number1 = data.length;
    var number2 = 0;
    data.forEach((index) => {
      if (index.golpe === "bueno") {
        number2 = number2 + 1;
      }
    })
    var porcentaje = (number2 / number1) * 100
    return porcentaje + " %"
  };

    return <div>
      <div className="container">
        <h1 className="text-center" id="title">Golf App Track</h1>
        <Form addSwing={addSwing} />
      </div>
      <div>
        <Card name="Golpes" data={numeroGolpes(swings)} />
      </div>
      <div>
        <Card name="Procentaje" data={porcetnajeGolpes(swings)} />
      </div>
      <div className="container">
        <h3 className="text-center">Tabla de Swings</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Golpe</th>
              <th>Distancia</th>
            </tr>
          </thead>
          <tbody>
            <Swing swing={swings} />
          </tbody>
        </table>
      </div>
    </div>

}

export default App;

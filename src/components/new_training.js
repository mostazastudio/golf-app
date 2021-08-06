import React, { useState, useEffect } from 'react'

import { Swing } from "./swing";
import { Form } from "./form";
import { Card } from "./card";

export const NewTraining = (props) => {

    const [swings, setSwings] = useState([])

    useEffect(() => {
        let data = localStorage.getItem("swings");
        if (data != null) {
            setSwings(JSON.parse(data))
        } else {
            setSwings([])
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("swings", JSON.stringify(swings));
    }, [swings]);

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

    const deleteStorage = () => {
        localStorage.clear()
        setSwings([])
    }

    return <div>
        <Form addSwing={addSwing} />
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
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 d-grid gap-2">
                    <button type="submit" onClick={() => deleteStorage()} className="btn btn-outline-danger">Borrar Data</button>
                </div>
            </div>
        </div>
    </div>
}

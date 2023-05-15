
import React, { useState } from 'react';
import 'App.css';
import axios from "axios";
import "game.css";
import {Link} from "react-router-dom";
import Head from "../../components/Sidebar/Head";
import Menu from "../../components/Sidebar/Menu";
const prizes = [
    { id: 1, text: "Prize 1", value: "Prize 1 Value" },
    { id: 2, text: "Prize 2", value: "Prize 2 Value" },
    { id: 3, text: "Prize 3", value: "Prize 3 Value" },
    { id: 4, text: "Prize 4", value: "Prize 4 Value" },
    { id: 5, text: "Prize 5", value: "Prize 5 Value" },
    { id: 6, text: "Prize 6", value: "Prize 6 Value" },
];

function Game() {
    const [name, setName] = useState("");
    let token=localStorage.getItem('dataKey');
    const baseURL ="https://5stargames.5starcompany.com.ng/api/profile";

    const [spinning, setSpinning] = useState(false);
    const [result, setResult] = useState(null);
    React.useEffect(() => {

        axios
            .get(baseURL, {
                headers:{
                    Authorization: `Bearer ${token}`,
                    game: 'TacToe'
                },

            })
            .then(response => {

                if (response.data.success ==="0"){
                    // window.location='/login';
                }
                setName(response.data.data.name);

                // console.log(response.data.data.name);
            });

    }, []);

    const handleSpinClick = () => {
        // Set spinning to true to start the animation
        setSpinning(true);

        // Generate a random number to determine the result
        const randomIndex = Math.floor(Math.random() * prizes.length);

        // Wait for the animation to finish (in this case, 5 seconds)
        setTimeout(() => {
            // Set spinning back to false to stop the animation
            setSpinning(false);

            // Set the result to the selected prize
            setResult(prizes[randomIndex]);
        }, 5000);
    };

    let container = document.querySelector(".container");
    let btn = document.getElementById("spin");
    let number = Math.ceil(Math.random() * 10000);

    const handleSpinClick1 = () => {
        container.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 10000);
    }
    return (
        <div className="g-sidenav-show  bg-gray-200">

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Head/>
            <Menu/>
            <div className="container-fluid py-4">


                <div className="bod card card-body">
                    <span className="arrow"></span>
                    <div className="container">
                        <div className="one">1</div>
                        <div className="two">2</div>
                        <div className="three">3</div>
                        <div className="four">4</div>
                        <div className="five">5</div>
                        <div className="six">6</div>
                        <div className="seven">7</div>
                        <div className="eight">8</div>
                        <button id="spin" onClick={handleSpinClick1}>Spin</button>

                    </div>
                </div>

        {/*    <div className="card card-body">*/}
        {/*    <h1>Spin and Win!</h1>*/}
        {/*    <button className="btn btn-info" onClick={handleSpinClick} disabled={spinning}>*/}
        {/*        {spinning ? "Spinning..." : "Spin"}*/}
        {/*    </button>*/}
        {/*    {result && (*/}
        {/*        <div className="result">*/}
        {/*            <h2>Congratulations!</h2>*/}
        {/*            <p>You've won {result.text} ({result.value})!</p>*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</div>*/}
            </div>
        </main>
        </div>
    );
}

export default Game;
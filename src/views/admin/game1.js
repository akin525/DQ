
import React, { useState } from 'react';
import 'App.css';
import axios from "axios";
import "game1.css";
import {Link} from "react-router-dom";
import Menu from "../../components/Sidebar/Menu";
import Head from "../../components/Sidebar/Head";
const prizes = [
    { id: 1, text: "Prize 1", value: "Prize 1 Value" },
    { id: 2, text: "Prize 2", value: "Prize 2 Value" },
    { id: 3, text: "Prize 3", value: "Prize 3 Value" },
    { id: 4, text: "Prize 4", value: "Prize 4 Value" },
    { id: 5, text: "Prize 5", value: "Prize 5 Value" },
    { id: 6, text: "Prize 6", value: "Prize 6 Value" },
];

function Game1() {
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


    return (
        <div className="g-sidenav-show  bg-gray-200">

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <Head/>
         <Menu/>
            <div className="container-fluid py-4">
                <div className="">

                <form id="tictactoe">
                    <input type="radio" name="cell-0" id="cell-0-x"/>
                    <input type="radio" name="cell-0" id="cell-0-o"/>
                    <input type="radio" name="cell-1" id="cell-1-x"/>
                    <input type="radio" name="cell-1" id="cell-1-o"/>
                    <input type="radio" name="cell-2" id="cell-2-x"/>
                    <input type="radio" name="cell-2" id="cell-2-o"/>
                    <input type="radio" name="cell-3" id="cell-3-x"/>
                    <input type="radio" name="cell-3" id="cell-3-o"/>
                    <input type="radio" name="cell-4" id="cell-4-x"/>
                    <input type="radio" name="cell-4" id="cell-4-o"/>
                    <input type="radio" name="cell-5" id="cell-5-x"/>
                    <input type="radio" name="cell-5" id="cell-5-o"/>
                    <input type="radio" name="cell-6" id="cell-6-x"/>
                    <input type="radio" name="cell-6" id="cell-6-o"/>
                    <input type="radio" name="cell-7" id="cell-7-x"/>
                    <input type="radio" name="cell-7" id="cell-7-o"/>
                    <input type="radio" name="cell-8" id="cell-8-x"/>
                    <input type="radio" name="cell-8" id="cell-8-o"/>


                    <div id="board">
                        <div className="tile" id="tile-0">
                            <label htmlFor="cell-0-x"></label>
                            <label htmlFor="cell-0-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-1">
                            <label htmlFor="cell-1-x"></label>
                            <label htmlFor="cell-1-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-2">
                            <label htmlFor="cell-2-x"></label>
                            <label htmlFor="cell-2-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-3">
                            <label htmlFor="cell-3-x"></label>
                            <label htmlFor="cell-3-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-4">
                            <label htmlFor="cell-4-x"></label>
                            <label htmlFor="cell-4-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-5">
                            <label htmlFor="cell-5-x"></label>
                            <label htmlFor="cell-5-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-6">
                            <label htmlFor="cell-6-x"></label>
                            <label htmlFor="cell-6-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-7">
                            <label htmlFor="cell-7-x"></label>
                            <label htmlFor="cell-7-o"></label>
                            <div></div>
                        </div>
                        <div className="tile" id="tile-8">
                            <label htmlFor="cell-8-x"></label>
                            <label htmlFor="cell-8-o"></label>
                            <div></div>
                        </div>
                    </div>
                    <div id="end">
                        <div id="message" className="center">
                            <div>
                                <input type="reset" htmlFor="tictactoe" value="Play again"/>
                            </div>
                        </div>
                    </div>
                </form>

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

export default Game1;
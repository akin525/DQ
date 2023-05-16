

import React, {useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

import ig from 'ba1.png';
import spin1 from 'spin.png';
import goo from 'google.png';
import sp from 'sp.png';
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "../../components/Cards/CardStats";
import gh from "../../lg.png";
import Head from "../../components/Sidebar/Head";
import tae from "../../tae.png";
import spin2 from "../../spi.jpeg";
import dai from "../../coin.png";
import wallet from "../../pro.png";
import 'da/assets/css/nucleo-icons.css';
import 'da/assets/css/nucleo-svg.css';
import 'da/assets/css/material-dashboard.css?v=3.0.4';
import Menu from "../../components/Sidebar/Menu";
export default function Dashboard() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const baseURL ="https://5stargames.5starcompany.com.ng/api/profile";

    const refer1="http://savebills.com.ng/auth/register?refer=";

    const [email, setEmail] = useState("");
    const [balance, setBalance] = useState("0");
    const [bonus, setbonus] = useState("0");
    const [account_number, setaccount_number] = useState("0");
    const [account_name, setaccount_name] = useState("0");
    const [name, setName] = useState("");
    const [username, setusername] = useState("");
    const [post, setPost] =useState(null);
    const [all, setall] = useState([]);
    const [noti, setnoti] = useState("");
    const [apikey, setapikey] = useState("");
    const [con, setcon] = useState("");

    const refer = `${refer1}${name}`;
    let token=localStorage.getItem('dataKey');
    function spin(){
        window.web2app.spinandwin({'token': "1380001|5xfpeJUtI3FXLaOR43f32PI7Wjjz2HfYVRoEsUev"})
    }

    function myCallback(data) {
        setcon(JSON.stringify(data.success));

    }
    React.useEffect(() => {

        setLoading(true);
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
                setPost(response.data);
                setLoading(false);
            });

    }, []);
    const profile= ()=>{
        try {
            {
                if(token && token.login)
                {
                    this.setState({login:true, token:token})
                }else {
                    // window.location='login.js';
                }
            }

        }catch (e) {
            console.log(e);
            console.log("e.data");
            console.log(e.data);
            // setError("An error occured. Check your input and try again");
        }

    }
    function myFunction() {
        /* Get the text field */
        var copyText = document.getElementById("myInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        alert(copyText.value);
    }
    const a= {
        margin: 5,

    };
    const ul={
        listStyleType:'square',
    };
    return (
        <div className="g-sidenav-show  bg-gray-200">

        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <Head/>

          <Menu/>
            <div className="container-fluid py-4">

            <div className="row ">
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="">
                            {/*<div*/}
                            {/*    className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">*/}
                            {/*    <i className="material-icons opacity-10">weekend</i>*/}
                            {/*</div>*/}
                            <img width="100" src={wallet} alt="#"/>
                            {/*<p className="text-sm mb-0 text-capitalize">Play Tae Toc</p>*/}
                        </div>
                        <hr className="dark horizontal my-0"/>
                            <div className="card-footer p-3">
                                <Link to={'/profile'} className="btn btn-outline-success">My Profile</Link>

                            </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="">
                            {/*<div*/}
                            {/*    className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">*/}
                            {/*    <i className="material-icons opacity-10">weekend</i>*/}
                            {/*</div>*/}
                            <img width="100" src={tae} alt="#"/>
                            {/*<p className="text-sm mb-0 text-capitalize">Play Tae Toc</p>*/}
                        </div>
                        <hr className="dark horizontal my-0"/>
                            <div className="card-footer p-3">
                                <Link to={'/tac'} className="btn btn-outline-success">Play Now</Link>

                            </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="">
                            {/*<div*/}
                            {/*    className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">*/}
                            {/*    <i className="material-icons opacity-10">weekend</i>*/}
                            {/*</div>*/}
                            <img width="100" src={spin2} alt="#"/>
                            {/*<p className="text-sm mb-0 text-capitalize">Play Tae Toc</p>*/}
                        </div>
                        <hr className="dark horizontal my-0"/>
                            <div className="card-footer p-3">
                                <Link to={'/spin'} className="btn btn-outline-success" >Spin Now</Link>

                            </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="">
                            {/*<div*/}
                            {/*    className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">*/}
                            {/*    <i className="material-icons opacity-10">weekend</i>*/}
                            {/*</div>*/}
                            <img width="100" src={dai} alt="#"/>
                            {/*<p className="text-sm mb-0 text-capitalize">Play Tae Toc</p>*/}
                        </div>
                        <hr className="dark horizontal my-0"/>
                            <div className="card-footer p-3">
                                <button className="btn btn-outline-success">Daily Bonus</button>

                            </div>
                    </div>
                </div>

            </div>
            </div>

        </main>
        </div>
  );
}

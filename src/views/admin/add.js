import React, {useEffect, useState} from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import axios from "axios";
import swal from "sweetalert";
import {Link} from "react-router-dom";
import Head from "../../components/Sidebar/Head";
import Menu from "../../components/Sidebar/Menu";
export default function Add() {
    const [network, setnetwork] = useState("");
    const [productid, setproductid] = useState("");
    const [name1, setName1] = useState("");
    const [name, setName] = useState("");
    const [po, setpo] = useState("");
    const [userid, setuserid] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [refid,setrefid] = useState("");
    const [datass, setdatass]=useState([]);
    const [bank, setbank]=useState([]);
    const [amount, setamount]=useState("");
    const [number,setnumber] = useState("");
    const baseURL2 = "https://5stargames.5starcompany.com.ng/api/bank_list";
    const baseURL1 = "https://server.savebills.com.ng/api/auth/dashboard";
    const btns = document.querySelectorAll('button');
    btns.forEach((items)=>{
        items.addEventListener('click',(evt)=>{
            evt.target.classList.add('activeLoading');
        })
    })
    const baseURL ="https://5stargames.5starcompany.com.ng/api/profile";
    const baseURL4 ="https://5stargames.5starcompany.com.ng/api/verify_bank";
    const baseURL3 = "https://5stargames.5starcompany.com.ng/api/bank_accounts";
    let token=localStorage.getItem('dataKey');
    const handlebank  = async (selected) =>  {


        try {

            axios
                .get(baseURL2, {
                    headers:{
                        Authorization: `Bearer ${token}`,
                        game: 'TacToe'
                    },

                })
                .then(response => {
                    setError("");
                    setMessage(response);

                    console.log(response.data);
                    setuserid(response.data.id);
                    setbank(response.data.data);

                });

        }catch (e) {
            console.log(e);
            console.log("e.data");
            console.log(e.data);
            setError("An error occured. Check your input and try again");
        }
    }

    React.useEffect(() => {
        handlebank();
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
                setName1(response.data.data.name);

                // console.log(response.data.data.name);
            });

    }, []);

    const handledata  = async (selected) =>  {


        try {

            axios
                .get(baseURL1, {
                    // username:useCookies('username'),
                    headers:{
                        Authorization: `Bearer ${token}`
                    },

                })
                .then(response => {
                    setError("");
                    setMessage(response);

                    console.log(response.data);
                    setuserid(response.data.id);

                });

        }catch (e) {
            console.log(e);
            console.log("e.data");
            console.log(e.data);
            setError("An error occured. Check your input and try again");
        }
    }

    const handleverify  = async (vertv) =>  {
        setName("Validating Account Number.......");
        try {
            axios
                .post(baseURL4, {
                    code:network,
                    accountnumber:vertv,
                }, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            game: 'TacToe'
                        }}

                )
                .then(response => {
                    setError("");
                    // setname(response.data.responseBody.accountName);
                    setName(response.data.data);

                    if (response.data.status === "0") {
                        setError(response.data);



                    }else{
                        setMessage(response.data.message);
                        // const [cookies, setCookie] = useCookies(response.data.username);


                    }
                    // setPost(response.data);
                });
        }catch (e) {
            console.log(e);
            console.log("e.data");
            console.log(e.data);
            setError("An error occured. Check your input and try again");
        }
    }

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(e.target.id === "network"){
            handledata(value);
            setnetwork(value);
            setpo(e.target.options[e.target.selectedIndex].text);


        }
        if(id === "name"){
            setnetwork(value);
        }

        if(id === "number"){
            setnumber(value);
            if (value.length>=10) {
                handleverify(value);
            }
        }
        if(id === "amount"){
            setamount(value);
        }





    }
    const handleSubmit  = async () =>  {

        try {
            axios.post(baseURL3, {
                bank_name: po,
                bank_code: network,
                account_name:name,
                amount: amount,
                account_number: number,
            },{
                headers: {
                    Authorization: `Bearer ${token}`,
                    game: 'TacToe'

                }
            }).then(response => {
                setError("");
                setMessage(response);
                console.log("response");
                console.log(response);
                if (response.data.status === "0") {
                    setError(response.data.message);
                    swal({
                        title: "Fail",
                        text: response.data.message,
                        icon: "error",
                        confirmButtonText: "OK",
                    }).then(function () {
                        // Redirect the user
                        // window.location.href = "/withdraw";
                    });


                }else{
                    setMessage(response.data.message);
                    // const [cookies, setCookie] = useCookies(response.data.username);
                    swal({
                        title: "Success",
                        text: response.data.message,
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(function () {
                        // Redirect the user
                        window.location.href = "/dashboard";
                    });
                }
                // setPost(response.data);
            });
        }catch (e) {
            console.log(e);
            console.log("e.data");
            console.log(e.data);
            setError("An error occured. Check your input and try again");
        }
    }

    return (
        <>

                    <div className="container-fluid py-4">

                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-8/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <form>
                                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">

                                            </h6>
                                            <div className="flex flex-wrap">
                                                <div className="w-full ">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Select Bank
                                                        </label>
                                                        <select name="network"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                                onChange = {(e) => handleInputChange(e)} id="network"
                                                                required>
                                                            <option>Select Bank</option>
                                                            {bank.map((datab) => (
                                                                <option id={datab['name']} value={datab['code']}>{datab['name']}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <input type="hidden" name="po" className="text-success form-control" value={po}
                                                           onChange = {(e) => handleInputChange(e)} id="po"

                                                           placeholder="Amount"  readOnly/>
                                                </div>
                                                <div className="w-full ">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Account Number
                                                        </label>
                                                        <input
                                                            type="number"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            value={number} onChange = {(e) => handleInputChange(e)} id="number"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="w-full ">
                                                    <div className="relative w-full mb-3">
                                                        <label
                                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                            htmlFor="grid-password"
                                                        >
                                                            Account Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                            value={name} onChange = {(e) => handleInputChange(e)} id="name"
                                                            readOnly/>
                                                    </div>
                                                </div>



                                            </div>
                                            {name === "" || name === "Validating IUC Number......."?<div></div>: <button type="button" onClick={handleSubmit}  className="btn btn-success">
                                                Add Bank<span className="load loading"></span>
                                            </button>}
                                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

        </>
    );
}



import React, {useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import CardSettings from "../../components/Cards/CardSettings";
import CardProfile from "../../components/Cards/CardProfile";
import {Link} from "react-router-dom";
import Head from "../../components/Sidebar/Head";
import Menu from "../../components/Sidebar/Menu";
import 'load.css';

export default function Tv() {
    const [loading, setLoading] = useState(false);
    const [network, setnetwork] = useState("");
    const [productid, setproductid] = useState("");
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
    const baseURL2 = "https://5stargames.5starcompany.com.ng/api/bank_accounts";
    const baseURL1 = "https://server.savebills.com.ng/api/auth/dashboard";
    const btns = document.querySelectorAll('button');
    btns.forEach((items)=>{
        items.addEventListener('click',(evt)=>{
            evt.target.classList.add('activeLoading');
        })
    })
    const baseURL ="https://5stargames.5starcompany.com.ng/api/profile";
    const baseURL3 ="https://5stargames.5starcompany.com.ng/api/withdrawals";

    let token=localStorage.getItem('dataKey');
    const handlebank  = async (selected) =>  {
        setLoading(true);


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
        setLoading(true);

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
                setName(response.data.data.name);

                // console.log(response.data.data.name);
            });
        setLoading(false);


    }, []);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(e.target.id === "network"){
            setnetwork(value);
            setpo(e.target.options[e.target.selectedIndex].text);


        }
        if(id === "name"){
            setnetwork(value);
        }

        if(id === "number"){
            setnumber(value);
            if (value.length>=10) {
            }
        }
        if(id === "amount"){
            setamount(value);
        }





    }
    const handleSubmit  = async () =>  {
        setLoading(true);

        try {
            axios.post(baseURL3, {

                bank_account_id: network,
                    amount: amount,
                },{
                headers: {
                    Authorization: `Bearer ${token}`,
                    game: 'TacToe'

                }
            }).then(response => {
                if (response.data.success == "0") {
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
                        // window.location.href = "/dashboard";
                    });
                }
                // setPost(response.data);
            });
            setLoading(false);

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
                                    {loading? <div className="loader-container">
                                            <div className="spinner"/>
                                        </div> :
                                    <div className="w-full ">

                                        {bank ==""?

                                            <button className="btn btn-success">Add Bank</button>:
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
                                                <option id={datab['name']} value={datab['id']}>{datab['account_name']} | {datab['account_number']}</option>
                                                ))}
                                            </select>
                                        </div>
                                        }
                                        <input type="hidden" name="po" className="text-success form-control" value={po}
                                               onChange = {(e) => handleInputChange(e)} id="po"

                                               placeholder="Amount"  readOnly/>
                                    </div>
                                    }


                                    <div className="w-full ">
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Amount
                                            </label>
                                            <input
                                                type="number"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                value={amount} onChange = {(e) => handleInputChange(e)} id="amount" required/>

                                        </div>
                                    </div>


                                </div>
                                <button type="button" onClick={handleSubmit}  className="btn btn-success">
                                    Withdraw<span className="load loading"></span>
                                </button>
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

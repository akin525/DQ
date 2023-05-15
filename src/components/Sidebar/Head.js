import React, {useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import   'load.css';
import   'prism.css';
import 'da/assets/css/nucleo-icons.css';
import 'da/assets/css/nucleo-svg.css';
import 'da/assets/css/material-dashboard.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Head({ children }) {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    const baseURL ="https://5stargames.5starcompany.com.ng/api/profile";

    let token=localStorage.getItem('dataKey');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [point, setpoint] = useState("");
    React.useEffect(() => {

        // setLoading(true);
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


                // setLoading(false);
            });

    }, []);

    return(
        <>
        <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
             data-scroll="true">
            <div className="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark"
                                                                   href="javascript:;">Pages</a></li>
                        <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
                <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <Link to={'/login'}> <i className="fa fa-power-off"></i></Link>
                    {/*<div className="ms-md-auto pe-md-3 d-flex align-items-center">*/}
                    {/*    <div className="input-group input-group-outline">*/}
                    {/*        <label className="form-label">Type here...</label>*/}
                    {/*        <input type="text" className="form-control"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <ul className="navbar-nav  justify-content-end">
                        <li className="nav-item d-flex align-items-center">
                            <a href="#" className="nav-link text-body font-weight-bold px-0">
                                <i className="fa fa-user me-sm-1"></i>
                                <span className="d-sm-inline d-none">{name}</span>
                            </a>
                        </li>
                        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a href="#" className="nav-link text-body p-0" id="iconNavbarSidenav">
                                {/*<button className="btn btn-info">log-out</button>*/}
                                {/*<div className="sidenav-toggler-inner">*/}
                                {/*    <i className="sidenav-toggler-line"></i>*/}
                                {/*    <i className="sidenav-toggler-line"></i>*/}
                                {/*    <i className="sidenav-toggler-line"></i>*/}
                                {/*</div>*/}
                            </a>
                        </li>
                        <li className="nav-item px-3 d-flex align-items-center">
                            <a href="javascript:;" className="nav-link text-body p-0">
                                <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            </>

    )

}
// Head.propTypes = {
//     children: PropTypes.node.isRequired,
// };
export default Head;
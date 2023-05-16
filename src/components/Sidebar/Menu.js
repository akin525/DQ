import React, {useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import   '../../load.css';
import   '../../prism.css';
import 'da/assets/css/nucleo-icons.css';
import 'da/assets/css/nucleo-svg.css';
import 'da/assets/css/material-dashboard.css';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Menu({ children }) {

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
                setEmail(response.data.data.email);
                setpoint(response.data.data.points)

                // setLoading(false);
            });

    }, []);

    return(
        <>
            <div className="card">
                <div className="card-body text-center">
                    <h6>{name}</h6>

                    <Link to={'/dashboard'} className="btn btn-success" href={'/dashboard'}>Back To Homepage</Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body text-center">
                    <div className="">
                        <center>
                            <Link to={'/withdraw'} className="btn btn-success " style={{margin: "5px"}} >Withdraw</Link>
                            <Link to={'/add'} className="btn btn-success" style={{margin: "5px"}} >Add Bank</Link>
                            <Link to={'/add'} className="btn btn-success" style={{margin: "5px"}} >Contact Us</Link>
                            <a className="btn btn-success" style={{margin: "5px"}} href="#">My Point: <i className="fa fa-coins"></i>
                                {parseInt(point).toLocaleString()}
                            </a>

                        </center>
                    </div>
                </div>
            </div>


        </>

    )

}
// Head.propTypes = {
//     children: PropTypes.node.isRequired,
// };
export default Menu;
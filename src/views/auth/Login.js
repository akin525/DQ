import { Link } from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import swal from "sweetalert";
import gh from 'lg.png'
import 'gg.css';
import 'lo.css';
import bo from 'boa.png';
export default function Login() {
const body={

    padding: "0",
    margin: "0",
    boxSizing: "border-box",

}
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [password,setPassword] = useState("");
  const [isloading, setisloading]=useState(false);
  const baseURL ="https://5stargames.5starcompany.com.ng/api/login";
  const baseURL1 = "https://server.savebills.com.ng/api/auth/google";
  const [loading, setloading]=useState(false);

  const [con, setcon] = useState("");

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt)=>{
    setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }
  function spin(){
    window.web2app.spinandwin({'token': "1380001|5xfpeJUtI3FXLaOR43f32PI7Wjjz2HfYVRoEsUev"})
  }

  function googleCallback(data) {
    // alert(JSON.stringify(data.data.email));
    setisloading(true);
    setloading(true);
    try {
      axios
          .post(baseURL1, {
            name:data.data.name,
            email:data.data.email,
            dob: '1990-04-12',
          })
          .then(response => {
            setError("");
            setMessage(response);
            setisloading(false);
            setloading(false);

            if (response.data.status == "0") {
              setError(response.data.message);
              swal({
                title: "Ooops",
                text: response.data.message,
                icon: "error",
                confirmButtonText: "OK",
              });


            }else{
              setMessage(response.data.message);
              localStorage.setItem('dataKey', response.data.token);
              // alert(response.data.token);
              try {
                window.web2app.biometric.saveauth({'password':password, 'username':username});
                window.web2app.pushNotification.subscribe(username);


              }catch (e) {
                console.log("Can not excecute for now");
              }
              // const [cookies, setCookie] = useCookies(response.data.username);
              window.location.href='/dashboard';
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
  function google(){
    window.web2app.googlesignin.signin(googleCallback);


  }


  function myCallback(data) {
    setcon(JSON.stringify(data.success));
    // alert(JSON.stringify(data));

  }
  function myCallback1(data) {
    setcon(JSON.stringify(data.success));
  }
  function myCall(data) {
    // alert(JSON.stringify(data));
  }

  function contactCallback(data) {
    console.log("I am in callback")
    console.log(JSON.stringify(data));
      // alert(JSON.stringify(data.data));
      // alert(JSON.stringify(data.data.username));
      // alert(JSON.stringify(data.data.password));

    setisloading(true);
    setloading(true);
    try {
      axios
          .post(baseURL, {
            username:data.data.username,
            password:data.data.password,
          })
          .then(response => {
            setError("");
            setMessage(response);
            setisloading(false);
            setloading(false);

            if (response.data.status == "0") {
              setError(response.data.message);
              swal({
                title: "Ooops",
                text: response.data.message,
                icon: "error",
                confirmButtonText: "OK",
              });


            }else{
              setMessage(response.data.message);
              localStorage.setItem('dataKey', response.data.token);

              // const [cookies, setCookie] = useCookies(response.data.username);
              window.location.href='/dashboard';
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
  function pick(){
    window.web2app.biometric.start(contactCallback);
  }
  React.useEffect(()=> {
    try {
      window.web2app.confirmlogin.islogout(myCallback1);
      window.web2app.deviceInfo(myCallback);
     window.web2app.biometric.check(myCall)
    }catch (e) {
      console.log("Can not excecute for now");
    }
  },[]);
  const handleInputChange = (e) => {
    const {id , value} = e.target;

    if(id === "email"){
      setemail(value);
    }

    if(id === "password"){
      setPassword(value);
    }


  }
  const handleSubmit  = async () =>  {
      setisloading(true);
    setloading(true);
    try {
      axios
          .post(baseURL, {
            email:email,
            password:password,
          }, {
            headers: {
              game: 'TacToe'
            },

          })
          .then(response => {
            setError("");
            setMessage(response);
            setisloading(false);
            setloading(false);

            if (response.data.success == "0") {
              setError(response.data.message);
              swal({
                title: "Ooops",
                text: response.data.message,
                icon: "error",
                confirmButtonText: "OK",
              });


            }else{
              setMessage(response.data.message);
              localStorage.setItem('dataKey', response.data.access_token);

              // const [cookies, setCookie] = useCookies(response.data.username);
           window.location.href='/dashboard';
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
      <div className="boy">
      {/*<img className="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"/>*/}
        <div className="container2">
          <div className="img">
            <img src={bo}/>
          </div>
          <div className="login-content">
            <form>
              <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg"/>

                <h2 className="title">Welcome</h2>
              {loading ? <div className="loader-container">
                    <div className="spinner"/>
                  </div> :
                  <div>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="div">
                    <h5>Email</h5>
                    <input type="email" className="input"
                           value={email} onChange={(e) => handleInputChange(e)} id="email"/>
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <h5>Password</h5>
                    <input type="password" className="input"
                           value={password} onChange={(e) => handleInputChange(e)} id="password"/>

                  </div>
                </div>

                <a href="#">Forgot Password?</a>
                    <button type="button" onClick={handleSubmit} className="btn1"><i className="fa fa-user-circle"></i> Login</button>
                    <hr/>
                    <Link to={'/auth/register'} className="text-center">Sign Up</Link>

                  </div>
              }
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

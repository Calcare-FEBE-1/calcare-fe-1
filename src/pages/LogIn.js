import React, { useState } from 'react'
import Footer from '../components/Footer'
import NavbarIndex from '../components/NavbarIndex'
import CalcareLogo from '../assets/img/CalcareLogo.png'
import LogoLogin from '../assets/img/logoLogin.png'
import '../style/css/logIn.css'
import { Link,  useNavigate } from 'react-router-dom'

const LogIn = () => {
    const navigate = useNavigate()
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const userPass = localStorage.getItem("pass")
    const userEmail = localStorage.getItem("email")
    const [errors, setErrors] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email === userEmail && pass === userPass){
            navigate('/Home')
        }
        else if(email == 0 || pass == 0){
            setErrors(true)
        }
        else{
            navigate('/logIn')
            alert("wrong")
        }
    }
  return (
    <div>
        <NavbarIndex url="/SignUp" name="Daftar"/>
        <div className='logIn'>
        <main >
        <div className="container-fluid">
            <div className="container ">
                <div className="kiri ">
                    <img src={LogoLogin} alt="logo login"/>
                </div>
                <div className="kanan">
                    <header>
                        <img src={CalcareLogo} className="text-center" alt="logo calcare"/>
                        <h3 className="text-center">Calcare</h3>
                    </header>

                    <h4>Masuk</h4>
                    <h5>Selamat Datang Di Calcare</h5>
                    <form name="form-login" onSubmit={handleSubmit}>
                        <div className="mb-3 mt-4 check">
                            <input type="email" className="form-control" name="email" id="email"
                                aria-describedby="emailHelp"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {errors && email.length<=0 ? <p id='massage'>Email tidak boleh kosong</p> :""}
                        </div>
                        <p id="emailStatus"></p>
                        <div className="mb-3">
                            <input type="password" className="form-control" name="pass" id="pass"
                                 placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                            {errors && pass.length<=0 ? <p id='massage'>Password tidak boleh kosong</p> :""}
                        </div>
                        <p id="passwordStatus"></p>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="checkbox"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                <p>I agree with <a  id="Terms">Terms</a> and <a 
                                        id="Privacy">Privacy</a></p>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary mb-3" id="login"  >Login</button>
                        <button type="submit" className="btn btn-primary mb-3" id="google"><i className="bi bi-google"></i>
                            Login with Google</button>
                        <button type="submit" className="btn btn-primary mb-3" id="facebook"><i className="bi bi-facebook"></i>
                            Login with Facebook</button>
                        <p>Belum Punya Akun? <Link to="/SignUp" id="daftar">Daftar</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </main>
    </div>

        <Footer/>
    </div>
  )
}

export default LogIn

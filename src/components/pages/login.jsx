import Card from "../ui/card";
import CardHeader from "../ui/CardHeader";
import CardContent from "../ui/CardContent";
import Button from "../ui/Button"
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MailIcon, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../styles/login.css"

export default function Login() {
    const [showPass, setShowPass] = useState(false)

    const togglePass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className="login-page">
            <Card className="login-form">
                <Link to="/" className="back-btn">
                        <ArrowLeft size={16} />Back
                </Link>
                <CardHeader className="card-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your Tambayan.ph account</p>
                </CardHeader>
                <CardContent className="card-content-login">
                    <div className="social-links">
                        <Link to="/" className="social-link">
                            <FcGoogle size={24}/> Continue with Google
                        </Link>
                        <Link to="/" className="social-link">
                            <FaFacebook size={24} color="#1877F2" /> Continue with Facebook
                        </Link>
                    </div>
                    <div className="divider">
                        <div className="text-container">
                            <span>Or continue with email</span>
                        </div>
                    </div>
                    <form>
                        <div className="email-container">
                            <label htmlFor="email">Email</label>
                            <div className="input-email">
                                <MailIcon size={18} color="#64748B" className="icons" />
                                <input type="email" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="pass-container">
                            <label htmlFor="password">Password</label>
                            <div className="input-pass">
                                <Lock size={18} color="#64748B" className="icons" />
                                <input type={showPass ? "text" : "password"} placeholder="Enter your password" />
                                <Button className="eye-icon" onClick={() => togglePass()} type="button" >
                                    {showPass ? <Eye size={20} /> : <EyeOff size={20} /> }
                                </Button>
                            </div>
                        </div>
                        <div className="util-container">
                            <div className="remember-cta">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Remember me</label>
                            </div>
                            <Link className="link">Forgot Password?</Link>
                        </div>
                        <Button className="sign-in-btn">Sign In</Button>
                    </form>
                    <div className="reg-nav">
                        <p>Don't have an account? <Link to="/register" className="link">Sign up</Link></p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Placeholder #. To be substituted into authentication for facebook and google
// Kulang password visibility toggle - DONE
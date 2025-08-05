import Card from "../ui/card"
import CardHeader from "../ui/CardHeader"
import CardContent from "../ui/CardContent"
import Button from "../ui/Button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, MailIcon, Lock, User, EyeOff, EyeIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import useToggle from "../../hooks/useToggle"
import "../styles/register.css"

export default function Register() {
    const [showPass, setShowPass] = useToggle(false)
    const [confirmPass, setConfirmPass] = useToggle(false)

    return (
        <div className="reg-page">
            <Card className="reg-form">
                <Link to={-1} className="back-btn">
                        <ArrowLeft size={16} />Back
                </Link>
                <CardHeader className="card-header-reg">
                    <h1>Create Account</h1>
                    <p>Join Tambayan.ph to find your perfect place</p>
                </CardHeader>
                <CardContent className="card-content-reg">
                    <div className="social-links-reg">
                        <Link to="/" className="social-link-reg">
                            <FcGoogle size={24}/> Continue with Google
                        </Link>
                        <Link to="/" className="social-link-reg">
                            <FaFacebook size={24} color="#1877F2" /> Continue with Facebook
                        </Link>
                    </div>
                    <div className="divider">
                        <div className="text-container">
                            <span>Or register with email</span>
                        </div>
                    </div>
                    <form>
                        <div className="name-container">
                            <div className="email-container">
                                <label htmlFor="first-name">First Name</label>
                                <div className="input-email">
                                    <User size={18} color="#64748B" className="icons" />
                                    <input 
                                        type="text"
                                        id="first-name" 
                                        placeholder="First name" 
                                        autoComplete="given-name"
                                    />
                                </div>
                            </div>
                            <div className="email-container">
                                <label htmlFor="last-name">Last Name</label>
                                <div className="input-email">
                                    <User size={18} color="#64748B" className="icons" />
                                    <input 
                                        type="text"
                                        id="last-name" 
                                        placeholder="Last name" 
                                        autoComplete="family-name"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="email-container">
                            <label htmlFor="email">Email</label>
                            <div className="input-email">
                                <MailIcon size={18} color="#64748B" className="icons" />
                                <input 
                                    type="email"
                                    id="email" 
                                    placeholder="Enter your email" 
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div className="pass-container">
                            <label htmlFor="password">Password</label>
                            <div className="input-pass">
                                <Lock size={18} color="#64748B" className="icons" />
                                <input 
                                    type={showPass ? "text" : "password"} 
                                    id="password"
                                    placeholder="Enter your password" 
                                />
                                <Button className="eye-icon" type="button" onClick={() => setShowPass()} >
                                    {showPass ? <EyeOff size={20} /> : <EyeIcon size={20} />}
                                </Button>
                            </div>
                        </div>

                        <div className="pass-container-reg">
                            <label htmlFor="confirm-pass">Confirm Password</label>
                            <div className="input-pass">
                                <Lock size={18} color="#64748B" className="icons" />
                                <input 
                                    type={confirmPass? "text" : "password"} 
                                    id="confirm-pass"
                                    placeholder="Enter your password" 
                                />
                                <Button className="eye-icon" type="button" onClick={() => setConfirmPass()}>
                                    {confirmPass ? <EyeOff size={20} /> : <EyeIcon size={20} /> }
                                </Button>
                            </div>
                        </div>
                        <Button className="sign-in-btn">
                            Create Account
                        </Button>
                    </form>
                    <div className="reg-nav">
                        <p>Already have an account? <Link to="/login" className="link">Sign in</Link></p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Kulang password visibility toggle - DONE
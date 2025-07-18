import Card from "../ui/card"
import CardHeader from "../ui/CardHeader"
import CardContent from "../ui/CardContent"
import Button from "../ui/Button"
import { Link } from "react-router-dom"
import { ArrowLeft, MailIcon, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import "../styles/register.css"



export default function Register() {
    return (
        <div className="reg-page">
            <Card className="reg-form">
                <Link to="/" className="back-btn">
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
                                <label htmlFor="email">First Name</label>
                                <div className="input-email">
                                    <User size={18} color="#64748B" className="icons" />
                                    <input type="text" placeholder="First name" />
                                </div>
                            </div>
                            <div className="email-container">
                                <label htmlFor="email">Last Name</label>
                                <div className="input-email">
                                    <User size={18} color="#64748B" className="icons" />
                                    <input type="text" placeholder="Last name" />
                                </div>
                            </div>
                        </div>
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
                                <input type="password" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="pass-container-reg">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="input-pass">
                                <Lock size={18} color="#64748B" className="icons" />
                                <input type="password" placeholder="Enter your password" />
                            </div>
                        </div>
                        <Button className="sign-in-btn">
                            Create Account
                        </Button>
                    </form>
                    <div className="reg-nav">
                        <p>Already have an account? <Link className="link">Sign in</Link></p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

// Kulang password visibility toggle
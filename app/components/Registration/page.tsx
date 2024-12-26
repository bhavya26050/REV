'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [user, setUser] = useState("");
    const [userError, setUserError] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [num, setNum] = useState("");
    const [numError, setNumError] = useState("");

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else if (email && password && password.length >= 8) {
            setFormValid(true);
        }
    }, [email, password, emailError, passwordError]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (formValid) {
            console.log("Form submitted!");
            console.log("Username:", { user });
            console.log("Email:", { email });
            console.log("Number", { num });
            console.log("Password:", { password });
            setUser("");
            setEmail("");
            setPassword("");
            setNum("");
        }
    };
    const validateUser = (user: string | any[]) => {
        if (user.length < 8) {
            setUserError("USERNAME must be at least 8 characters long.");
        } else {
            setUserError("");
        }
    };

    //   const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //       setEmailError("Please enter a valid email address.");
    //     } else {
    //       setEmailError("");
    //     }
    //   };

    const validatePassword = (password: string | any[]) => {
        //   const passwordPattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
        if (password.length < 8 || !/[A-Z]/.test(password)) {
            setPasswordError(
                "Password must be at least 8 characters long and contain at least one uppercase letter"
            );
        } else {
            setPasswordError("");
        }
    };
    const validateNum = (Num: string | any[]) => {
        if (num.length < 9) {
            setNumError("Number must be at least 10 digit Number .");
        } else {
            setNumError("");
        }
    };
    return (
        <div className=" justify-center flex ">
            <div className="  justify-center flex px-52 py-48  h-full w-full">
                <form
                    className=" p-10 w-96 h-full bg-gray-200 "
                    onSubmit={handleSubmit}
                >
                    <h1 className=" font-bold text-3xl items-center flex justify-center ">Sign UP</h1>
                    <br></br>
                    <input
                        className="h-10 w-full mb-5 rounded-md px-3"
                        type="text"
                        placeholder="Username"
                        name="user"
                        value={user}
                        required
                        minLength={8}
                        onChange={(event) => {
                            setUser(event.target.value);
                            validateUser(event.target.value);
                        }}
                    />
                    <br></br>
                    {userError && <p className="text-red-500">{userError}</p>}
                    <input
                        className="h-10 w-full mb-5 rounded-md px-3"
                        type="email"
                        placeholder="Email"
                        name="Email"
                        value={email}
                        required
                        onChange={(event) => {
                            setEmail(event.target.value);

                        }}
                    />
                    <br></br>
                    {emailError && <p className="text-red-500">{emailError}</p>}
                    <input
                        className="h-10 w-full mb-5 rounded-md px-3 decoration-transparent"
                        type="number"
                        placeholder="Mobile Number"
                        name="Num"
                        value={num}
                        required
                        maxLength={10}
                        minLength={10}
                        onChange={(event) => {
                            setNum(event.target.value);
                            validateNum(event.target.value);
                        }}
                    />
                    <br></br>
                    {numError && <p className="text-red-500">{numError}</p>}
                    <input
                        type="password"
                        placeholder="Password"
                        name="pass"
                        value={password}
                        required
                        minLength={8}
                        className="h-10 w-full mb-10 rounded-md px-3"
                        onChange={(event) => {
                            setPassword(event.target.value);
                            validatePassword(event.target.value);
                        }}
                    />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                    <button
                        className=" bg-blue-500 text-white font-bold py-2 px-2 rounded w-full mb-5"
                        disabled={!formValid}
                    >
                        Sign UP
                    </button>
                    <p className="m-5">
                        <b>
                            Have an account ?<br></br>
                            <Link href='./Login'>
                                <button className="text-indigo-600">
                                    LOGIN
                                </button>
                            </Link>
                        </b>
                    </p>
                </form>
            </div>
        </div >
    )
}
export default Registration;
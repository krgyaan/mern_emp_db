import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import img from '../assets/logo.jpg'

const Signin = () => {
    const navigateTo = useNavigate();
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Login successful
                console.log('Login successful');
                navigateTo('/dashboard')
            } else {
                // Login failed
                setError(response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="bg-gray-1 py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[525px] overflow-hidden border rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]">
                            <div className="mb-10 text-center md:mb-16">
                                <a href="/#" className="mx-auto inline-block max-w-[160px]" >
                                    <img src={img} alt="logo" width="100" />
                                </a>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <p className="py-2">{error}</p>
                                <input type="email" name="email" placeholder="Email" className="mb-6 w-full rounded-md border py-3 px-3" onChange={handleChange} value={formData.email} />

                                <input type="password" name="password" placeholder="Password" className="mb-6 w-full rounded-md border py-3 px-3" onChange={handleChange} value={formData.password} />

                                <div className="mb-10">
                                    <input type="submit" value="Sign In" className="w-full cursor-pointer rounded-md border border-indigo-500/100 bg-indigo-500 px-5 py-3 text-base font-medium text-white transition hover:bg-opacity-90" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signin;

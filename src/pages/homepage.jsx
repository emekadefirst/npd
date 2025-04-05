import { useState } from 'react';

export default function PoliceLoginComponent() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', formData);
        alert('Login attempt processed. This would connect to an authentication system in a real application.');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Blur */}
            <div 
                className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center"
                style={{ 
                    backgroundImage: 'url(/images/bgimg.jpg)',
                    filter: 'blur(5px)',
                    transform: 'scale(1.1)'  // Slightly scale up to avoid blur edges
                }}
            ></div>
            
            {/* Silk overlay effect */}
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-green-900/20 to-blue-900/30 backdrop-blur-sm"></div>
            
            <div className="w-full max-w-md relative z-20">
                {/* Login Form Card with silk-like design */}
                <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-8 border border-white/20">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-green-800">
                            Nigeria Police Report Desk
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Official Citizen Reporting Portal
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="username"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Officer ID
                            </label>
                            <input
                                type="number"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your ID"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-medium mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 bg-white/70 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 block text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div>
                                <a href="#" className="text-green-600 hover:text-green-800">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors shadow-lg"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center text-gray-600 text-sm">
                        <p>For emergency assistance, please call 112 or 767</p>
                        <p className="mt-2">© 2025 Nigeria Police Force. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
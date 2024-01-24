'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/firebase/authentication'; // Adjust this path to your auth.js file
import { useGlobalState } from '@/context/globalState'; // Adjust this path to your context file
import { toast } from 'react-toastify';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { setAuth } = useGlobalState();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await login(email, password, setAuth);
            toast.success("Successfully Logged In");
            router.push('/'); // Redirect to homepage or dashboard after login
        } catch (error) {
            toast.error(error.message);
            setError(error.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-3 rounded-lg shadow-md bg-white">
                <h1 className="text-2xl font-semibold text-center text-gray-700">Log In</h1>
                {error && <p className="text-center text-red-500">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

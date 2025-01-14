import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import See from "./pages/See";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if the password is correct
    const [password, setPassword] = useState(""); // Store the entered password
    const correctPassword = "laaash"; // Replace with your desired password

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert("Incorrect Password. Please try again.");
            setPassword(""); // Clear the input field
        }
    };

    return (
        <div className="bg-[#181C14] text-[#697565] h-[100vh] w-[100vw] flex justify-center items-center">
            {!isAuthenticated ? (
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Enter Password</h1>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value.toLowerCase())}
                        className="p-2 rounded border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#697565] mb-4"
                    />
                    <br />
                    <button
                        onClick={handlePasswordSubmit}
                        className="bg-[#697565] text-white px-4 py-2 rounded"
                    >
                        Submit
                    </button>
                    <div className="mt-4 text-sm">Hint: #us our names with three a.</div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cheee" element={<Error />} />
                    <Route path="/see" element={<See />} />
                </Routes>
            )}
        </div>
    );
}

export default App;

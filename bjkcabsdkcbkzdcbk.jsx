import React, { useState } from 'react';

const Home = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [ans, setAns] = useState("");

    const questions = [
        {
            id: 1,
            question: "Kaisi Hai?",
            options: ["Bhadiyaa", "Thik"],
            answer: ["Thik"],
            list: ["Bhadiyaa kyu nhi"]
        },
        {
            id: 2,
            question: "Khana Khaya?",
            options: ["Haan", "Nhi"],
            answer: ["Nhi"],
            list: ["Jao Khana khao"]
        },
        {
            id: 3,
            question: "Kya kr rhi?",
            options: [
                "Kuch nhi",
                "Padh rhi"],
            list: ["Juth hi bol deti tera wait"]
        },
    ];

    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestionIndex].answer) {
            setAns(questions[currentQuestionIndex].list.join(", "));
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Omk Tataa...`);
        }
        if (currentQuestionIndex < questions.length - 1) {
            // Move to the next question after a slight delay for feedback visibility
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setAns(""); // Clear feedback
            }, 3000);
        } else {
            setTimeout(() => {
                alert("Omk Tataa...");
                setCurrentQuestionIndex(0); // Reset to the first question
                setAns("");
            }, 3000);
        }
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-l md:text-3xl mt-16 mb-4 '>Jldi Jldi yeh sawal ka jawab do fir agla sawal milega...</div>
                <div className='border-b mb-16 w-[80vw] '></div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='w-[80vw] h-[30vh] text-center bg-[#3C3D37] rounded'>
                    <div className='text-xl mt-10 font-bold mb-8 text-[#EEEADE]'>{questions[currentQuestionIndex].question}</div>
                    <div style={{ display: 'inline-block', textAlign: 'left' }}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className='bg-[#656d4a] text-white p-2 rounded mx-2'
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {ans && (
                        <p style={{ marginTop: "20px", fontSize: "18px", color: "#FFD700" }}>
                            {ans}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState(""); // Feedback for the answer
    const navigate = useNavigate();

    const questions = [
        {
            id: 1,
            question: "Kaisi Hai?",
            options: ["Bhadiyaa", "Thik"],
            answer: "Thik",
            list: ["Bhadiyaa kyu nhi"],
            img: "./assets/1.jpg", // Ensure correct path
        },
        {
            id: 2,
            question: "Khana Khaya?",
            options: ["Haan", "Nhi"],
            answer: "Nhi",
            list: ["Jao Khana khao"],
            img: "./assets/2.jpg", // Ensure correct path
        },
        {
            id: 3,
            question: "Kya kr rhi?",
            options: ["Kuch nhi", "Padh rhi"],
            answer: "Padh rhi",
            list: ["Juth hi bol deti tera wait"],
            img: "./assets/3.jpg", // Add image if necessary
        },
        {
            id: 4,
            question: "Krna hai breakup?",
            options: ["Nhi", "Haan"],
            answer: "Nhi",
            img: "./assets/4.jpg", // Add image if necessary
        },
    ];

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.answer) {
            setFeedback(currentQuestion.list?.join(", ") || "Correct!");
        } else {
            setFeedback("Good gurl...");
        }

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setFeedback(""); // Clear feedback
            }, 3000);
        } else {
            // Navigate to the next route after the last question
            setTimeout(() => {
                navigate("/cheee");
            }, 3000);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-bold md:text-3xl mt-32 mb-4">
                    Jldi Jldi yeh sawal ka jawab do fir agla sawal milega...
                </div>
                <div className="border-b mb-16 w-[80vw]"></div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[80vw] h-[30vh] text-center bg-gray-100 rounded p-6">
                    <div className="text-xl mt-10 font-bold mb-8 text-[#EEEADE]">
                        {currentQuestion.question}
                    </div>
                    <div style={{ display: "inline-block", textAlign: "left" }}>
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className="bg-[#656d4a] text-white p-2 rounded mx-2"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {feedback && (
                        <p className="mt-10 font-bold text-lg text-[#8FAB98]">
                            {feedback}
                        </p>
                    )}
                    {currentQuestion.img && (
                        <img
                            src={currentQuestion.img}
                            alt="Question Related"
                            className="mt-4 w-32 h-32 mx-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;

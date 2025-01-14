import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState(""); // Feedback for the answer
    const [img, setImg] = useState("");

    const navigate = useNavigate();


    const questions = [
        {
            id: 1,
            question: "Kaisi Hai?",
            options: ["Bhadiyaa", "Thik"],
            answer: "Thik",
            list: ["Bhadiyaa kyu nhi"],
            img: "./assets/1.jpg"
        },
        {
            id: 2,
            question: "Khana Khaya?",
            options: ["Haan", "Nhi"],
            answer: "Nhi",
            list: ["Jao Khana khao"],
            img: "./assets/4.jpg"
        },
        {
            id: 3,
            question: "Kya kr rhi?",
            options: ["Kuch nhi", "Kuch nhi"],
            answer: "Kuch nhi",
            list: ["Juth hi bol deti tera wait"],
            img: "./assets/13.jpg"
        },
        {
            id: 4,
            question: "Next ques ka ans sach sach batana",
            options: ["Thik", "Nhi"],
            answer: "Nhi",
            list: ["Y vroo..."],
            img: "./assets/14.jpg"
        },
        {
            id: 5,
            question: "Krna hai breakup?",
            options: ["Nhi", "Haan"],
            answer: "Nhi",
            img: "./assets/15.jpg",
            list: ["Moi babe..."],
        },
    ];

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
    
        if (selectedAnswer === currentQuestion.answer) {
            setFeedback(currentQuestion.list?.join(", "));
            setImg(currentQuestion.img || "");
        } else {
            setFeedback("Good gurl...");
        }
    
        if (currentQuestionIndex < questions.length - 1) {
            // Move to the next question after a slight delay for feedback visibility
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setFeedback(""); // Clear feedback
                setImg(""); // Clear image
            }, 3000);
        } else {
            // Navigate based on the final question's answer
            setTimeout(() => {
                if (selectedAnswer === currentQuestion.answer) {
                    navigate("/see");
                } else {
                    navigate("/cheee");
                }
            }, 3000);
        }
    };
    

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="font-bold md:text-3xl mt-32 mb-4">
                    Jldi Jldi yeh sawal ka jawab do fir agla sawal milega...
                </div>
                <div className="border-b mb-16 w-[80vw]"></div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[80vw] h-[53vh] text-center bg-[#3C3D37] rounded">
                    <div className="text-xl mt-10 font-bold mb-8 text-[#EEEADE]">
                        {questions[currentQuestionIndex].question}
                    </div>
                    <div style={{ display: "inline-block", textAlign: "left" }}>
                        {questions[currentQuestionIndex].options.map((option, index) => (
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
                            {/* write code to display image */}
                        </p>
                    )}
                    {questions[currentQuestionIndex].img && (
                        <img
                            src={questions[currentQuestionIndex].img}
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

import React, { useState } from "react";

const Home = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedback, setFeedback] = useState(""); // Feedback for the answer

    const questions = [
        {
            id: 1,
            question: "Kaisi Hai?",
            options: ["Bhadiyaa", "Thik"],
            answer: "Thik",
            list: ["Bhadiyaa kyu nhi"],
        },
        {
            id: 2,
            question: "Khana Khaya?",
            options: ["Haan", "Nhi"],
            answer: "Nhi",
            list: ["Jao Khana khao"],
        },
        {
            id: 3,
            question: "Kya kr rhi?",
            options: ["Kuch nhi", "Padh rhi"],
            answer: "Padh rhi",
            list: ["Juth hi bol deti tera wait"],
        },
    ];

    const handleAnswer = (selectedAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.answer) {
            setFeedback(currentQuestion.list.join(", "));
        } else {
            setFeedback("Galat jawab!");
        }

        if (currentQuestionIndex < questions.length - 1) {
            // Move to the next question after a slight delay for feedback visibility
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setFeedback(""); // Clear feedback
            }, 1000);
        } else {
            setTimeout(() => {
                alert("Omk Tataa...");
                setCurrentQuestionIndex(0); // Reset to the first question
                setFeedback("");
            }, 1000);
        }
    };

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-lg md:text-3xl mt-16 mb-4">
                    Jldi Jldi yeh sawal ka jawab do fir agla sawal milega...
                </div>
                <div className="border-b mb-16 w-[80vw]"></div>
            </div>

            <div className="flex justify-center items-center">
                <div className="w-[80vw] h-[30vh] text-center bg-[#3C3D37] rounded">
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
                        <p style={{ marginTop: "20px", fontSize: "18px", color: "#FFD700" }}>
                            {feedback}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;

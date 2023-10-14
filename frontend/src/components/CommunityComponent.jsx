import React, { useState } from 'react';

const CommunityComponent = () => {
    // Sample data for women-oriented questions and anonymous answers
    const [communityData, setCommunityData] = useState([
        {
            id: 1,
            question: "What's your advice for aspiring women entrepreneurs?",
            answers: [
                { id: 1, answer: "Believe in yourself and your vision!" },
                { id: 2, answer: "Find a mentor who supports your journey." },
            ],
        },
        {
            id: 2,
            question: "Share your experience in breaking gender barriers in tech.",
            answers: [
                { id: 3, answer: "I overcame challenges through resilience and knowledge." },
                { id: 4, answer: "Supportive communities made a big difference." },
            ],
        },
    ]);

    const [newAnswer, setNewAnswer] = useState('');

    const handleReply = (questionId) => {
        // Add logic to post a reply to a question
        const updatedData = communityData.map((questionData) => {
            if (questionData.id === questionId) {
                questionData.answers.push({
                    id: questionData.answers.length + 1,
                    answer: newAnswer,
                });
            }
            return questionData;
        });

        setCommunityData(updatedData);
        setNewAnswer('');
    };

    return (
        <div className="mx-2 p-2 shadow my-2 rounded bg-red-100 community-component">
            <h2 className='text-blue-500'>Women Community and Help</h2>
            <ul className="questions-list">
                {communityData.map((questionData) => (
                    <li key={questionData.id}>
                        <h3>{questionData.question}</h3>
                        <ul className="answers-list">
                            {questionData.answers.map((answerData) => (
                                <li key={answerData.id}>
                                    <div className="user-answer">
                                        <span className="user-name">Anonymous User:</span> {answerData.answer}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="reply-box">
                            <input
                                type="text"
                                placeholder="Your Answer"
                                value={newAnswer}
                                onChange={(e) => setNewAnswer(e.target.value)}
                                className="my-2 w-full p-2 rounded border border-gray-300 text-base"
                            />

                            <button
                                onClick={() => handleReply(questionData.id)}
                                className="bg-violet-500 hover:bg-violet-700 active:bg-pink-500 active:hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Reply
                            </button>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommunityComponent;

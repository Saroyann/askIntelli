import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";
const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResults,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (promptText) => {
        setInput(promptText);
    };
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src="https://github.com/Saroyann/Gemini-Clone/blob/master/src/assets/user_icon.png?raw=true" alt="" />
            </div>
            <div className="main-container">
                {!showResults ? (
                    <>
                        <div className="greet">
                            <p>
                                <span>Hello , Human </span>
                            </p>
                            <p>How Can i Help You Today?</p>
                        </div>
                        <div className="cards">
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("Suggest Some Place To Visit In Kerala")
                                }
                            >
                                <p>Suggest Some Place To Visit In Kerala </p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick(
                                        "Brainstorm team bonding activities for our work retreat"
                                    )
                                }
                            >
                                <p>Brainstorm team bonding activities for our work retreat </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() =>
                                    handleCardClick("How to Create a Gyroscope using Disc?")
                                }
                            >
                                <p>How to Create a Gyroscope using Disc?</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div
                                className="card"
                                onClick={() => {
                                    handleCardClick(
                                        "Create a Script for the youtube video about coding "
                                    );
                                }}
                            >
                                <p>Create a Script for the youtube video about coding </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <p>{recentPrompt}</p>
                            <img src="https://github.com/Saroyann/Gemini-Clone/blob/master/src/assets/user_icon.png?raw=true" alt="" />
                        </div>
                        <div className="result-data">
                            <img src="https://github.com/Saroyann/Gemini-Clone/blob/master/src/assets/gemini_icon.png?raw=true" alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter the Prompt Here"
                        />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ?
                                <img
                                    src={assets.send_icon}
                                    alt=""
                                    onClick={() => {
                                        onSent();
                                    }}
                                />
                                : null}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;




const Result = ({score, totalQuestion, restartQuiz, reviewQuiz}) => {
    return (
        <div>
            <h2>Kết qủa</h2>
            <p className="result">Bạn trả lời đúng {score} / {totalQuestion} câu 👏</p>
            <div className="resultButtonsContainer">
                <button
                    className="result-button"
                    onClick={reviewQuiz}
                >
                    Xem lại
                </button>

                <button
                    className="result-button"
                    onClick={restartQuiz}
                >
                    Làm lại
                </button>
            </div>
        </div>
    )
}

export default Result
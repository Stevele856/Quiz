import React, { useEffect, useState} from 'react'
import Result from './Result';

const quizData = [
    {
        question: "TypeScript là gì?",
        options: [
            "Một framework của JavaScript",
            "Một superset của JavaScript có hỗ trợ static typing",
            "Một ngôn ngữ hoàn toàn mới không liên quan đến JavaScript",
            "Một thư viện front-end"
        ],
        answer: "Một superset của JavaScript có hỗ trợ static typing"
  },
  {
    question: "Kiểu dữ liệu 'unknown' trong TypeScript khác với 'any' như thế nào?",
    options: [
      "Không khác gì nhau",
      "'unknown' buộc phải kiểm tra kiểu trước khi sử dụng",
      "'any' an toàn hơn 'unknown'",
      "'unknown' chỉ dùng cho số"
    ],
    answer: "'unknown' buộc phải kiểm tra kiểu trước khi sử dụng"
  },
  {
    question: "Câu lệnh nào để định nghĩa một interface trong TypeScript?",
    options: [
      "class MyInterface {}",
      "interface MyInterface {}",
      "type MyInterface = {}",
      "struct MyInterface {}"
    ],
    answer: "interface MyInterface {}"
  },
  {
    question: "Cách nào đúng để khai báo một biến có kiểu Union?",
    options: [
      "let value: number | string;",
      "let value: [number, string];",
      "let value: {number, string};",
      "let value: (number, string);"
    ],
    answer: "let value: number | string;"
  },
  {
    question: "Generic trong TypeScript dùng để làm gì?",
    options: [
      "Tạo ra biến toàn cục",
      "Viết code có thể tái sử dụng với nhiều kiểu dữ liệu",
      "Giảm dung lượng file biên dịch",
      "Chỉ dùng cho class"
    ],
    answer: "Viết code có thể tái sử dụng với nhiều kiểu dữ liệu"
  },
  {
    question: "Kiểu 'never' trong TypeScript biểu thị điều gì?",
    options: [
      "Hàm không bao giờ trả về giá trị",
      "Hàm trả về null",
      "Hàm không có tham số",
      "Hàm luôn trả về một giá trị"
    ],
    answer: "Hàm không bao giờ trả về giá trị"
  },
  {
    question: "Câu lệnh nào đúng để khai báo một tuple?",
    options: [
      "let arr: [string, number] = ['Steve', 25];",
      "let arr: (string, number) = ['Steve', 25];",
      "let arr: {string, number} = ['Steve', 25];",
      "let arr: [string | number] = ['Steve', 25];"
    ],
    answer: "let arr: [string, number] = ['Steve', 25];"
  },
  {
    question: "Readonly modifier trong TypeScript có ý nghĩa gì?",
    options: [
      "Cho phép thay đổi giá trị sau khi khai báo",
      "Chỉ được gán giá trị một lần và không thay đổi",
      "Chỉ áp dụng cho hàm",
      "Chỉ áp dụng cho class"
    ],
    answer: "Chỉ được gán giá trị một lần và không thay đổi"
  },
  {
    question: "Type assertion trong TypeScript được dùng để?",
    options: [
      "Ép kiểu dữ liệu tại thời điểm runtime",
      "Chuyển đổi kiểu dữ liệu một cách an toàn",
      "Thông báo cho compiler về kiểu dữ liệu mà lập trình viên chắc chắn",
      "Tự động infer kiểu dữ liệu"
    ],
    answer: "Thông báo cho compiler về kiểu dữ liệu mà lập trình viên chắc chắn"
  },
  {
    question: "Enum trong TypeScript được dùng để?",
    options: [
      "Định nghĩa một tập hợp hằng số có tên",
      "Tạo ra một class",
      "Khai báo biến global",
      "Sinh ra interface mới"
    ],
    answer: "Định nghĩa một tập hợp hằng số có tên"
  }
]

// console.log(quizData)


const Quiz = () => {

    const [selectedOptions, setSelectedOptions] = useState('');
    const [userAnswer, setUserAnswer] = useState(Array.from({ length: quizData.length })) // Một mảng có chiều dài bằng số câu hỏi trong quiz;
    // console.log(userAnswer) = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizEnded, setIsQuizEnded] = useState(false);
    const [score, setScore] = useState(0);
    

    // Handle selected option
    const handleSelectedOptions = (option, index) => {
            // console.log('Option is:', option)
        setSelectedOptions(option)

        /* 
        => Khi người dùng chọn đáp án => lưu vị trí của câu trả lời đó vào
        đúng vị trí trong mảng của userAnswer

        - userAnswer là state trong React => Không thể sửa giá trị trực tiếp
        - Tạo mảng mới và gán mảng mới trong userAnswer
        */
        
        const newUserAnswer = [...userAnswer]
        // Cập nhật đáp án mới vào => thay giá trị ở vị trí currentQuestion = đáp án mà user vừa chọn
        newUserAnswer[currentQuestion] = index
        // newUserAnswer[1] = 'B' => index = 1
        // Tại vị trí câu hỏi số 2, user chọn đáp án là B => index 1
        setUserAnswer(newUserAnswer)

        // console.log(newUserAnswer)

        if (option === quizData[currentQuestion].answer) {
            setScore((prev) => prev + 1);
        }
        

    }

    // Handle navigate button
    const nextBtn = () => {

        /* Vì sau khi disabled, selectedOptions sẽ bị disable ở các câu hỏi kết tiếp
            - Mỗi khi bấm vào nút kết tiếp hay quay lại sẽ kiểm tra xem câu đó có được trả lời chưa
                + nếu rồi thì selectedOptions sẽ đổi thành đáp án mà người dùng trả lời
                + nếu chưa thì reset selectedOptions thành chuỗi rỗng
        */
        
        // Render result UI
        if (currentQuestion === quizData.length - 1) {
            setIsQuizEnded(true)
        } else {
            setCurrentQuestion((prev) => prev + 1)
        }
    }
    
    const prevBtn = () => {
        if (currentQuestion > 0) {
        setCurrentQuestion((prev) => prev - 1)   
        }

        // const answer = Number(userAnswer[currentQuestion - 1]) // lấy đáp án mà user chọn ở câu hỏi hiện tại và ép về kiểu số
        // // console.log(answer)
        // const prevOptionSelected = quizData[currentQuestion - 1].options[answer] // đi vào mảng quizData => lấy câu hỏi hiện tại => truy cập vào mảng option => lấy ra option theo vị trí mà người dùng chọn
        // // console.log(prevOptionSelected)

        // if (answer !== undefined) {
        //     setSelectedOptions(prevOptionSelected)
        // } else {
        //     setSelectedOptions('')
        // }
    }

        // Restart Quiz, Reset các state về giá trị ban đầu, sau đó truyền function này xuống result như là 1 props
    const restartQuiz = () => {
        setSelectedOptions('');
        setCurrentQuestion(0);
        setIsQuizEnded(false);
        setUserAnswer(Array.from({ length: quizData.length }))
        setScore(0)
    }

    const reviewQuiz = () => {
        setCurrentQuestion(0)
        setIsQuizEnded(false);
    }

    // Vấn đề với + 1 và -1 => sử dụng useEffect()
    useEffect(() => {
        const answer = Number(userAnswer[currentQuestion]) // lấy đáp án mà user chọn ở câu hỏi hiện tại và ép về kiểu số
        // console.log('Answer index is:', answer)
        // console.log('Current question is', currentQuestion)

        const prevOptionSelected = quizData[currentQuestion].options[answer] // đi vào mảng quizData => lấy câu hỏi hiện tại => truy cập vào mảng option => lấy ra option theo vị trí mà người dùng chọn
        // console.log('Option selected is:', prevOptionSelected)

        if (answer !== undefined) {
            setSelectedOptions(prevOptionSelected)
        } else {
            setSelectedOptions('')
        }
    }, [currentQuestion, userAnswer]);


    // 🐞 Nếu tính điểm bằng cách này thì khi xem lại câu hỏi, điểm vẫn sẽ được tính lại 1 lần nữa  
    // vì currentQuestion đã thay đổi và re-render lại mặc dù selected option đã được chọn rồi
    // nên giải pháp là sẽ tính điểm 1 lần chỉ khi user nhấn vào nút "Kế tiếp"
    // useEffect(() => {
    //     if (selectedOptions === quizData[currentQuestion].answer)
    //     // setScore(score + 1)
    //     setScore((prev) => prev + 1);
    // }, [currentQuestion, selectedOptions]);


    if (isQuizEnded) {
        return (
            <Result
                score={score}
                totalQuestion={quizData.length}
                restartQuiz={restartQuiz}
                reviewQuiz={reviewQuiz}
            />
        ) 
    }


    return (
        <>
            <h2>Câu {currentQuestion + 1}</h2>   
            <p className='question'>{quizData[currentQuestion].question}</p>

            {/* Render câu hỏi*/}
            {
                quizData[currentQuestion].options.map((option, index) =>
                    
                    <button
                        key={option }
                        className={`option && ${selectedOptions === option ? 'selected' : ''}`}
                        disabled = {!!selectedOptions && selectedOptions !== option}
                        onClick={() => handleSelectedOptions(option, index)}
                    >
                        {option}
                    
                    </button>)
            }

            {/* Kiểm tra nếu selectedOptions === answer thì render ra text kết quả đúng hoặc sai  */}
            {selectedOptions ? (quizData[currentQuestion].answer === selectedOptions
                ? (<p className='correct-answer'>Câu trả lời của bạn chính xác</p>)
                : (<p className='incorrect-answer'>Câu trả lời của bạn chưa chính xác</p>)) : ('')
            }

            {/* Navigate btn */}
            <div className="nav-buttons">
                <button
                    onClick={prevBtn}
                    disabled={currentQuestion === 0}
                >
                    Quay lại
                </button>
                
                
                <button
                    onClick={nextBtn}
                    disabled={!selectedOptions}
                >
                    {currentQuestion === quizData.length - 1 ? 'Hoàn thành' : 'Kế tiếp'}
                </button> 
                {/* !optionSelected là phủ đinh giá trị   */}
            </div>
            
        </>
    )

    

}

export default Quiz


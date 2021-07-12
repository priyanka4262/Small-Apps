import react from "react";
const Greeting = () => {
    const [wish, setWish] = useState('');
    const onTimeChangeHandler = (event) => {
        if (!event.target.value) {
            setWish("Enter any number");
        }
        else if (event.target.value >= 0 && event.target.value < 13) {
            setWish("good morning");
        }
        else if (event.target.value > 13 && event.target.value <= 16) {
            setWish("good afternoon");
        }
        else if (event.target.value > 16 && event.target.value <= 20) {
            setWish("good evening");
        }
        else if (event.target.value > 18 && event.target.value <= 24) {
            setWish("good night");
        }
        else if (event.target.value > 24) {
            setWish("Invalid Time");
        }
        else if (event.target.value === "") {
            setWish(" ");
        }
    }
    return (
        <div className="container">
            <label>Enter time in hours:</label>
            <input type="text" onChange={onTimeChangeHandler}></input>
            <label className="wishLabel">{wish}</label>
        </div>
    )
}
export default Greeting;
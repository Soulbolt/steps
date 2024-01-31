import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1); // useState to increment number value of 1 to toggle through step 1 -3 when using next and previous buttons.
  const [isOpen, setIsOpen] = useState(true); // useState to toggle display on and off

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
    /*
     * Dont set State manually is Bad Practice! example Below
     * test.name = "fred"
     * set a new useState instead => const [test, setTest] = useState(name: "Jonas")
     * setTest({name: "Fred"})
     */
  }

  return (
    /*
     * Use of teranry conditionals to apply class active based on the number value
     * button to use onClick() with setIsOpen along with isOpen useState variables to hide or display content on button toggle
     * <></> These is called a React.fragment
     *
     */
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }} //handling events with onClick()
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

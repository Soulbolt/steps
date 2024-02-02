import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>🤖</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read chidlren prop</p>
        <p>👍</p>
      </StepMessage>
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1); // useState to increment number value of 1 to toggle through step 1 -3 when using next and previous buttons.
  const [isOpen, setIsOpen] = useState(true); // useState to toggle display on and off

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep(step + 1);
    }
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

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
// Resuable Button, make use of the children prop to pass on data inside open and close Button tags.
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

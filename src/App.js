import { useState } from "react";
import "./styles.css";

var headingText = "Emoji Interpreter";
// var username = prompt("Enter name: ")

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Orange",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍐": "Pear",
  "🍒": "Cherries"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    const userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>{headingText}</h1>
      <p>Enter or click one of the fruit emojis below to know its meaning !</p>
      <input onChange={emojiInputHandler}></input>
      <h2> {meaning}</h2>
      <h3>Emojis we know : </h3>
      {emojisWeKnow.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5 rem", cursor: "pointer" }}
          key={emoji}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

// class ==> className
// style accepts a JS object

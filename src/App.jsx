
import { useState } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Features from "./components/Features";
import StartupCard from "./components/StartupCard";
import Footer from "./components/Footer";

function App() {
  const [idea, setIdea] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState("");

  const generateIdeas = async () => {
    if (!idea.trim()) {
      alert("Please enter a startup niche");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "cohere/north-mini-code:free",
          messages: [
            {
              role: "user",
              content: `
Generate exactly 9 startup ideas for ${idea}.

Return ONLY a valid JSON array.

Example:

[
 {
  "name":"EduMind",
  "tagline":"Smart learning powered by AI",
  "domain":"edumind.ai"
 }
]

No explanation.
No markdown.
No extra text.
`,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiText =
        response.data.choices[0].message.content;

      const parsedData = JSON.parse(aiText);

      setResults(parsedData);
      setLoading(false);

    } catch (error) {
      console.log(error.response?.data);
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <Header />

      <SearchBox
        idea={idea}
        setIdea={setIdea}
        generateIdeas={generateIdeas}
        loading={loading}
      />

      {results.length > 0 && (
        <button
          className="generate-more"
          onClick={generateIdeas}
        >
          Generate More Ideas
        </button>
      )}

      <Features />

      <div className="cards">
        {results.map((item, index) => (
          <StartupCard
            key={index}
            item={item}
            copied={copied}
            setCopied={setCopied}
          />
        ))}
      </div>

      {results.length > 0 && <Footer />}

    </div>
  );
}

export default App;
import "./Highlight.css";

export const Highlight = () => {
  return (
    <div className="highlight">
      <h1>Let me be a part of your team</h1>
      <p>Why I should be working for you?</p>

      <div className="highlight__body">
        <ul>
          <li>Fast learner.</li>
          <li>Creative.</li>
          <li>Adaptability.</li>
        </ul>
        <ul>
          <li>Team player.</li>
          <li>Problem solving.</li>
          <li>High work ethic.</li>
        </ul>
      </div>

      <button>Learn More</button>
    </div>
  );
};

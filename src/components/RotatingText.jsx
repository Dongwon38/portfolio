const RotatingText = () => {
  const words = ["simple", "readable", "clean"];

  return (
    <div className="rotating-text">
      <p className="left-text">I write {"["}</p>
      <div className="rotating-word-container">
        {words.map((word, index) => (
          <span key={index} className="rotating-word">
            {word}
          </span>
        ))}
      </div>
      <p className="right-text">{"]"} code</p>
    </div>
  );
};

export default RotatingText;

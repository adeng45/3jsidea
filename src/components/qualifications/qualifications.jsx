import "./qualifications.css";

const Qualifications = () => {
  return (
    <div class="quali-section-container">
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div className="content html"></div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div className="content css"></div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div className="content python"></div>
          <h1>python</h1>
        </div>
        <div className="qualification">
          <div className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div className="content c"></div>
          <h1>c</h1>
        </div>
        <div className="qualification">
          <div className="content sql"></div>
          <h1>sql</h1>
        </div>
        <div className="qualification">
          <div className="content node"></div>
          <h1>node</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;

import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Experience</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Job 1</h1>
          <h3 className="position">Position 1</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#members" className="contact-member">
            <span>Learn More</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Job 2</h1>
          <h3 className="position">Position 2</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#members" className="contact-member">
            <span>Learn More</span>
          </a>
        </div>
      </div>

      <div className="member member-3">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">Job 3</h1>
          <h3 className="position">Position 3</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#members" className="contact-member">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;

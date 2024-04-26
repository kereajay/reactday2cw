// import "index.css";
let Heading = () => {
    return (
      <div id="heading1">
        <h1>Learn web development</h1>
       
      </div>
    );
  };
  let Para1 = (props) => {
      const {data} = props
    return (
      <div id="para1">
       
        <p style={{fontSize:"larger" , marginLeft:"1%"}}>
        Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.
        </p>
      </div>
    );
  };
  let Para2 = (props) => {
      const {data} = props
    return (
      <div id="para1">
       
        <p style={{fontSize:"larger" , marginLeft:"1%"}}>
        The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.
        </p>
      </div>
    );
  };
  let Para3 = (props) => {
      const {data} = props
    return (
      <div id="para1">
       
        <p style={{fontSize:"larger" , marginLeft:"1%"}}>
        If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class
materials, a hobbyist, or someone who just wants to understand more about how web technologies work.
        </p>
      </div>
    );
  };
  
  
  
  let Body = () => {
    return (
      <div id="body1" style={{marginLeft:"5%"  }}>
        {/* <h1>Mahakal</h1> */}
        <Heading />
        <Para1/>
        <Para2 />
        <Para3 />
        
      </div>
    );
  };
  let root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Body />);
  
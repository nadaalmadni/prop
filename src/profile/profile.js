export default function Profile(prop) {
    return (
      <div className="App">
        <h1>Naday Almadni</h1>
        <h2>Hi People</h2>
        <img src={prop.photo} alt="san" />
        <p></p>
        <button onClick={prop.alert}>back</button>
      </div>
    );
  }
  
  Profile.defaultProps = {
    Bio: "this the default data",
    age: "20"
  };
  
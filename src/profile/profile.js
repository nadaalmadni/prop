export default function Profile(prop) {
    return (
      <div className="App">
        <h1 className='rr '>Naday Almadni</h1>
        <h1 className='dd'> Hi People</h1>
        <img className='sora' src={prop.photo} alt="download" />
        <br/>
        <br/>
            <button className='nn' onClick={prop.alert}>Back</button>
            </div>
        
      
    );
  }
  
  Profile.defaultProps = {
    Bio: "this the default data",
    age: "30"
  };
  
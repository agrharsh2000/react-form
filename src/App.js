import "./App.css";

function App() {
  return (
    <div className="FirstPage">
      <div className="PageHeader">
        <h2 className="PageTitle">FORMZ</h2>
        <button className="LoginButton">Login</button>
      </div>
      <div className="FirstPageContent">
        <p className="FirstPageTitleContext">
          We make Forms, that’s it oh, but Better!
        </p>
        <p className="FirstPageTitleDescription">
          At the end of the day developers are asked to make the business forms,
          hence it’s time to make them developer friendly
        </p>
        <button className="GetStartedButton">GetStarted</button>
      </div>
    </div>
  );
}

export default App;

import { render } from "react-dom";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Your name</h1>
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));

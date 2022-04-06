import ReactDOM from "react-dom";
import "./index.css";
import App from "./AppEntryConfig/App";
import { Provider } from "react-redux";
import store from "./AppEntryConfig/reduxStore";

const RootComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RootComponent />, document.getElementById("root"));

import flying from "./assets/flying.png";
import { connect } from "react-redux";
import { startRotate, stopRotate } from "./actions";

// rotation: true false
//NOT useSelector useDispatch

function App(props) {
  console.log(props);
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        onClick={props.rotate ? props.stop : props.start}
        src={flying}
        className={props.rotate ? "animate-spin-slow" : ""}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(startRotate),
    stop: () => dispatch(stopRotate),
  };
};

//{...states,...setStates}

//Higher Order Component
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { withRouter } from "react-router-dom";

class Result extends React.Component {
  restart = () => {
    this.props.resetQuiz();
    this.props.history.push("/");
  };

  render() {
    console.log(this.props.location)
    return (
      <div className="banana">
      <div className="result">
        <h2>Hi <span className="murid">{this.props.userName}</span> ,berikut hasil tes kamu!</h2>

        <div className="alert alert-info">
          Soal yang dijawab {" "}
          <strong>{this.props.result.correct + this.props.result.wrong}</strong>{" "}
          soal.
        </div>
        <div className="alert alert-success">
          Jawaban Benar <strong>{this.props.result.correct}</strong>.
        </div>
        <div className="alert alert-danger">
          Jawaban Salah <strong>{this.props.result.wrong}</strong>.
        </div>

        <p>
          <button className="btn btn-secondary" onClick={this.restart}>
            <i className="fa fa-refresh" /> Restart the quiz
          </button>
        </p>
      </div>
      </div>

    );
  }
}

export default withRouter(Result);

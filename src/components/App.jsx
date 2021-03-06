import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import StatusBar from "./StatusBar";
import FooterBar from "./FooterBar";
import Question from "./Question";
import Error404 from "./Error404";
import Result from "./Result";
import questions from "../data/questions";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil : 0,
      jumlah : 0,
      userName:'',
      kelas:'',
      questions,
      choices: {},
      batas : 10,
      score: {
        correct: 0,
        wrong: 0,
        total: 0
      }
    };
  }
  

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  getNextQuestion = currentId => {
    const keys = this.shuffleArray(Object.keys(this.state.questions));
    const currentIndex = keys.indexOf(currentId);
    const nextIndex = currentIndex + 1;
    const nextId = keys[nextIndex];
    return this.state.questions[nextId];
  };

  getFirstQuestion = () => {
    const idx = 0;
    const questionId = this.shuffleArray(Object.keys(this.state.questions))[idx];
    return this.state.questions[questionId];
  };

  getLastQuestion = () => {
    const keys = Object.keys(this.state.questions);
    const lastKey = keys[keys.length - 1];

    return this.state.questions[lastKey];
  };

  updateScore = success => {
    this.setState(state => {
      if (success) {
        state.score.correct++;
        state.score.total++;
      } else {
        state.score.wrong++;
      }
        state.jumlah++;
        state.hasil++;
      return state;
    });
  };

  saveChoices = (questionId, choices) => {
    this.setState(state => {
      state.choices[questionId] = choices;
    });
  };

  resetQuiz = () => {
    this.setState(state => {
      state.choices = {};
      state.score = {
        correct: 0,
        wrong: 0,
        total: 0
      };
    });
  };

  render() {

    return (
      <div className="app container">
        <header className="header">
          <h1>
            <a href="/">Kuis Matematika</a>
          </h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home getFirstQuestion={this.getFirstQuestion}/>}
            />
            <Route
              path="/q/:id/:userName/:kelas"
              render={request => {
                const questionId = request.match.params.id
                const userName = request.match.params.userName
                const kelas = request.match.params.kelas
                this.setState(state => {
                  state.userName = userName
                  state.kelas = kelas
                })
                return (
                  <Fragment>
                    <StatusBar
                      count={this.state.jumlah + 1}
                      total= {this.state.batas}
                      score={this.state.score.total}
                    />
                    <Question
                      id={questionId}
                      userName={userName}
                      kelas={kelas}
                      question={this.state.questions[questionId]}
                      choices={this.state.choices[questionId] || []}
                      getNextQuestion={this.getNextQuestion}
                      getLastQuestion={this.getLastQuestion}
                      updateScore={this.updateScore}
                      saveChoices={this.saveChoices}
                      hasil={this.state.hasil + 1}
                    />
                    <FooterBar
                      userName={userName}
                      kelas={kelas}
                      count={
                        Object.keys(this.state.questions).indexOf(questionId) +
                        1
                      }
                      total={Object.keys(this.state.questions).length}
                      score={this.state.score.total}
                    />
                  </Fragment>
                );
              }}
            />
            <Route
              exact
              path="/result"
              render={() => (
                <Result result={this.state.score} userName={this.state.userName} resetQuiz={this.resetQuiz} />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

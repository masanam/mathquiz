import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        userName: '', 
        kelas: '' 
    };
  }

  start = event => {
    if ((this.state.userName !=='') && (this.state.kelas !=='')){
      event.preventDefault();
      this.props.history.push({
        pathname: `/q/${this.props.getFirstQuestion().uuid}/${this.state.userName}/${this.state.kelas}`
      })
    }else{
        alert('Data tidak boleh kosong')
      }
  };

  render() {
    return (
      <Fragment>
      <div className="question">
      <div className="username">

      <form>
        <div>
        <label htmlFor="userName">Nama Lengkap</label>
         <input
           type="text"
           name="userName"
           value={this.state.userName}
           onChange={this.handleChange}
         />
        </div>

        <div>
        <label htmlFor="kelas">Kelas</label>
                <input
                  type="text"
                  name="kelas"
                  value={this.state.kelas}
                  onChange={this.handleChange}
                />

        </div>
       </form>

        <button className="btn btn-primary" onClick={this.start}>
          Start Quiz!&nbsp;
          <i className="fa fa-arrow-right" />
        </button>
        </div>
        </div>

      </Fragment>
    );
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
 };
}

export default withRouter(Home);

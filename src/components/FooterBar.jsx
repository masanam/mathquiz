import React from "react";

function FooterBar(props) {
  return (
    <div className="question-header">
      <div className="row">
        <div className="col col-lg-6">
        Index: {props.count} / {props.total}
        </div>
        <div className="col col-lg-6 text-right soal">
        Nama : {props.userName} / {props.kelas}
        </div>
      </div>
    </div>
  );
}

export default FooterBar;

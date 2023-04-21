import React from "react";
import {marked} from "marked";
import "./style.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {

    var inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
    };
    var outputStyle = {
      width: "400px",
      height: "50vh",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",

    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="one">
              <h1>
                {" "}
              
                  MARKDOWN PREVIEWER
                
              </h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              {" "}
              <div className="and">
                <h3>
                  
                    Markdown Input
                  
                </h3>
              </div>
              <div className="input" style={inputStyle}>
                <textarea
                  className="input"
                  style={inputStyle}
                  value={this.state.markdown}
                  onChange={(e) => {
                    this.updateMarkdown(e.target.value);
                  }}
                >
                </textarea>
              </div>
            </div>

            <div className="was">
              {" "}
              <div className="col text-center">
                <h2>
                 
                   Output 
                  
                </h2>
              </div>
              <div
                style={outputStyle}
                dangerouslySetInnerHTML={{
                  __html: marked(this.state.markdown),
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
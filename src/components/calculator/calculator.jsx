import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calculator.scss";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      showResult: false,
      operator: "",
      operand: 0
    };
  }

  handleNumClick = num => {
    if (num === "result") {
      this.setState(state => {
        if (state.operator === "+") {
          return {
            result: state.result + state.operand,
            showResult: true,
            operand: 0,
            operator: ""
          };
        }
        if (state.operator === "-") {
          return {
            result: state.result - state.operand,
            showResult: true,
            operand: 0,
            operator: ""
          };
        }
        if (state.operator === "*") {
          return {
            result: state.result * state.operand,
            showResult: true,
            operand: 0,
            operator: ""
          };
        }
        if (state.operator === "/" && state.operand !== 0) {
          return {
            result: state.result / state.operand,
            showResult: true,
            operand: 0,
            operator: ""
          };
        } else if (!state.operator) {
          return {};
        } else {
          alert("Division with zero is not acceptable");
          return {};
        }
      });
    } else {
      this.setState(state => {
        if (state.operand === 0) {
          return { operand: num, showResult: false };
        } else {
          let stringNum = `${state.operand}${num}`;

          return { operand: parseInt(stringNum), showResult: false };
        }
      });
    }
  };

  handleOperatorClick = operator => {
    this.setState(state => {
      if (!state.showResult) {
        if (operator === "+") {
          return { result: state.operand, operand: 0, operator: "+" };
        }
        if (operator === "-") {
          return { result: state.operand, operand: 0, operator: "-" };
        }
        if (operator === "*") {
          return { result: state.operand, operand: 0, operator: "*" };
        }
        if (operator === "/") {
          return { result: state.operand, operand: 0, operator: "/" };
        }
      } else {
        if (operator === "+") {
          return { operator: "+" };
        }
        if (operator === "-") {
          return { operator: "-" };
        }
        if (operator === "*") {
          return { operator: "*" };
        }
        if (operator === "/") {
          return { operator: "/" };
        }
      }
    });
  };

  handleClear = () => {
    this.setState({
      result: 0,
      showResult: false,
      operator: "",
      operand: 0
    });
  };

  showNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "result"].map(element => {
    return (
      <div className="num" key={element} id={`number${element}`}>
        <button
          onClick={() => {
            this.handleNumClick(element);
          }}
        >
          {element}
        </button>
      </div>
    );
  });
  render() {
    return (
      <div>
        <div className="calculator">
          <div className="screen">
            {this.state.showResult ? (
              <>{this.state.result.toFixed(0)}</>
            ) : (
              <>{this.state.operand}</>
            )}
          </div>
          <div className="operators">
            <button
              className="add"
              onClick={() => {
                this.handleOperatorClick("+");
              }}
            >
              +
            </button>
            <button
              className="sub"
              onClick={() => {
                this.handleOperatorClick("-");
              }}
            >
              -
            </button>
            <button
              className="mul"
              onClick={() => {
                this.handleOperatorClick("*");
              }}
            >
              *
            </button>
            <button
              className="divide"
              onClick={() => {
                this.handleOperatorClick("/");
              }}
            >
              /
            </button>
          </div>
          <div className="numbers">{this.showNumbers}</div>
          <button className="clear" onClick={this.handleClear}>
            Clear
          </button>
        </div>
        <Link to="/">Go back to the main page</Link>
      </div>
    );
  }
}

export default Calculator;

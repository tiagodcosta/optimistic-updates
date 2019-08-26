import React, { PureComponent } from "react";

import "./App.css";

const mockupData = [
  {
    id: 1,
    message: "Hello World",
    like: "no"
  },
  {
    id: 2,
    message: "Hi World",
    like: "no"
  },
  {
    id: 3,
    message: "Bye World",
    like: "no"
  }
];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      updates: mockupData,
      alert: "working fine"
    };
  }

  mockupSaveRequest() {
    return new Promise((resolve, reject) => {
      let randomNum = Math.floor(Math.random() * Math.floor(3));
      setTimeout(() => {
        if (randomNum === 1) {
          this.setState({
            alert: "sorry"
          });
          return reject("Error here");
        } else {
          this.setState({
            alert: "working fine"
          });
          return resolve("Success");
        }
      }, 1000);
    });
  }

  handleClick = id => {
    this.setState(
      prevState => {
        const updates = [...prevState.updates];
        const index = updates.findIndex(update => update.id === id);

        updates[index] = {
          id: updates[index].id,
          message: updates[index].message,
          like: "yes"
        };

        return { updates };
      },
      () => {
        this.mockupSaveRequest()
          .then(() => {})
          .catch(() => {
            this.setState(prevState => {
              const updates = [...prevState.updates];
              const index = updates.findIndex(update => update.id === id);

              updates[index] = {
                id: updates[index].id,
                message: updates[index].message,
                like: "no"
              };

              return { updates };
            });
          });
      }
    );
  };

  render() {
    const { updates, alert } = this.state;
    console.log("updates", updates);
    return (
      <div className="App">
        <h1>Updates - {alert}</h1>
        {updates.map((update, index) => {
          return (
            <div key={index} id={update.id}>
              {update.message} - {update.like} -
              <button onClick={() => this.handleClick(update.id)}>Like</button>
            </div>
          );
        })}
      </div>
    );
  }
}


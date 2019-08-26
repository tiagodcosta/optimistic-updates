import React, { PureComponent } from "react";
import mockupData from '../data/mockup';
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      updates: mockupData,
      errorMessage: ""
    };
  }

  mockupSaveRequest() {
    return new Promise((resolve, reject) => {
      let randomNum = Math.floor(Math.random() * Math.floor(3));
      setTimeout(() => {
        if (randomNum === 1) {
          return reject("Error here");
        } else {
          return resolve("Success");
        }
      }, 500);
    });
  }

  handleClick = (id, answer) => {
    this.setState(
      prevState => {
        const errorMessage = "";
        const updates = [...prevState.updates];
        const index = updates.findIndex(update => update.id === id);

        updates[index] = {
          id: updates[index].id,
          message: updates[index].message,
          answer: answer
        };

        return { updates, errorMessage };
      },
      () => {
        this.mockupSaveRequest()
          .then(() => {})
          .catch(() => {
            this.setState(prevState => {
              const errorMessage = "Sorry we could not send your answer :("
              const updates = [...prevState.updates];
              const index = updates.findIndex(update => update.id === id);

              updates[index] = {
                id: updates[index].id,
                message: updates[index].message,
                answer: '---'
              };

              return { updates, errorMessage };
            });
          });
      }
    );
  };

  render() {
    const { updates, errorMessage } = this.state;

return (
      <section className="updates">
        <h1 className="updates__title">Optimistic Updates</h1>
        <section className="updates__container">
        {updates.map((update, index) => {
          return (
            <article className="updates__item" key={index} id={update.id}>
              <section>
                <p>{update.message}</p>
                <p>Answer: {update.answer}</p>
              </section>
              <button className="updates__button updates__button--green" onClick={() => this.handleClick(update.id, 'yes')}>Yes</button>
              <button className="updates__button updates__button--red" onClick={() => this.handleClick(update.id, 'no')}>No</button>
            </article>
          );
        })}
        <p className="updates__error">{errorMessage}</p>
        </section>
      </section>
    );
  }
}

export default App;
import React, { Component } from "react";
import {
  getCards,
  postCard,
  getFromLocal,
  setToLocal,
  patchCard
} from "../services";
import CardList from "./CardList";
import Form from "./Form";

export default class App extends Component {
  state = {
    cards: getFromLocal("cards") || []
  };

  componentDidMount() {
    this.loadCards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cards !== this.state.cards) {
      setToLocal("cards", this.state.cards);
    }
  }

  loadCards() {
    getCards()
      .then(data => this.setState({ cards: data }))
      //setState() muss in der class bleiben
      .catch(error => console.log(error));
  }

  createCard = data => {
    const { cards } = this.state;

    postCard(data)
      .then(newCard => this.setState({ cards: [...cards, newCard] }))
      .catch(error => console.log(error));
  };

  updateCardInState = changedCard => {
    const { cards } = this.state;
    const index = cards.findIndex(card => card._id === changedCard._id);
    this.setState({
      cards: [...cards.slice(0, index), changedCard, ...cards.slice(index + 1)]
    });
  };

  handleToggleBookmark = card => {
    patchCard({ bookmarked: !card.bookmarked }, card._id)
      .then(this.updateCardInState)
      .catch(error => console.log(error));
  };

  render() {
    const { cards } = this.state;

    return (
      <main>
        <h1>Cards</h1>
        <Form onFormSubmit={this.createCard} />
        <CardList onToggleBookmark={this.handleToggleBookmark} cards={cards} />
      </main>
    );
  }
}

//key definiert die id der einzelnden cards, damit der DOM weis auf welche karte er zugreifen soll, in die props kommt man über die keys rein

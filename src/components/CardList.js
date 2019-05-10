import React from "react";
import Card from "./Card";

export default function CardList({ cards, onToggleBookmark }) {
  return (
    <section className="card-list">
      {cards.map(card => (
        <Card
          key={card._id}
          onToggleBookmark={() => onToggleBookmark(card)}
          {...card}
        />
      ))}
    </section>
  );
}

//bei react wird die id immer mit einem unterstrich erstellt

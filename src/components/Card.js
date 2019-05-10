import React from "react";
import Tag from "./Tag";

export default function Card({
  title,
  description,
  tags,
  onToggleBookmark,
  bookmarked
}) {
  return (
    <section className="card">
      <small onClick={onToggleBookmark}>
        {bookmarked ? "bookmarked" : "bookmark"}
      </small>
      <h3>{title} </h3>

      <p>{description}</p>
      {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
    </section>
  );
}

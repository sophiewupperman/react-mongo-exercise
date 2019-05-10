import React from "react";

export default function Form({ onFormSubmit }) {
  function splitToArray(tagString) {
    return tagString.split(",").map(tag => tag.trim());
  }

  function handelSubmit(event) {
    const form = event.target;
    event.preventDefault();
    onFormSubmit({
      title: form.title.value,
      description: form.description.value,
      tags: splitToArray(form.tags.value)
    });
  }

  return (
    <form className="form" onSubmit={handelSubmit}>
      <input name="title" placeholder="title" type="text" />
      <input name="description" placeholder="description" type="text" />
      <input name="tags" placeholder="tags" type="text" />
      <button>Submit</button>
    </form>
  );
}

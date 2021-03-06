export function getCards() {
  return fetch("/cards").then(res => res.json());
}

export function postCard(data) {
  return fetchCard("POST", data);
}

export function patchCard(data, id) {
  return fetchCard("PATCH", data, id);
}

function fetchCard(method, data, id = "") {
  return fetch("/cards/" + id, {
    method,

    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

//backend ist postCards here
//frontend ist handelSubmit

export function getFromLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}

export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

const parse = response => response.json();

export default class Service {
  constructor(endpoint) {
    this._endpoint = `http://localhost:3000/${endpoint}`;
  }

  getItems() {
    return fetch(this._endpoint).then(parse);
  }

  addItem(item) {
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    };

    return fetch(this._endpoint, params).then(parse);
  }

  editItem(item) {
    const params = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    };

    return fetch(`${this._endpoint}/${item.id}`, params).then(parse);
  }

  removeItem(itemId) {
    const params = {
      method: 'DELETE'
    };

    return fetch(`${this._endpoint}/${itemId}`, params).then(parse);
  }
}

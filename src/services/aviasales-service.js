class AviasalesService {
  _baseUrl = new URL('https://aviasales-test-api.kata.academy');
  _searchId = null;

  getSearchId = async () => {
    const urlSearchId = new URL('/search', this._baseUrl);
    const res = await fetch(urlSearchId);
    if (!res.ok) {
      throw new Error(`Код ошибки ${res.status}. Необходимо перезагрузить страницу`);
    }
    const body = await res.json();
    this._searchId = body.searchId;
  };

  getTickets = async () => {
    const urlGetTickets = new URL('/tickets', this._baseUrl);
    urlGetTickets.searchParams.append('searchId', this._searchId);
    const res = await fetch(urlGetTickets);
    if (!res.ok) {
      throw new Error(`Код ошибки ${res.status}`);
    }
    return res.json();
  };
}

export { AviasalesService };

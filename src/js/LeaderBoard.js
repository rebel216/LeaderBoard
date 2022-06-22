class LeaderBoard {
  constructor() {
    // eslint-disable-next-line operator-linebreak
    this.url =
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  }

  async NewGame(gamename) {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({
        name: gamename,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const recievedResponse = await response.json();
    return recievedResponse;
  }

  async getScores(gameID) {
    const response = await fetch(`${this.url}${gameID}/scores/`);
    const recievedResponse = await response.json();
    return recievedResponse;
  }

  async postScore(gameID, username, score) {
    const response = await fetch(`${this.url}${gameID}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: username,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const recievedResponse = await response.json();
    return recievedResponse;
  }
}

export default LeaderBoard;

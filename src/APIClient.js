import "isomorphic-fetch"

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default class APIClient {
    async load(subreddit) {
      await sleep(5000);
      const response = await fetch(`https://reddit.com/${subreddit}.json`)
      const json = await response.json();
      return json.data.children.map(item => item.data);
    }
}
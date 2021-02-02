import "isomorphic-fetch"

export default class APIClient {
    async load(subreddit) {
      const response = await fetch(`https://reddit.com/${subreddit}.json`)
      const json = await response.json();
      console.debug(Object.keys(json));
      return json.data.children.map(item => item.data);
    }
}
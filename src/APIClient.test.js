import APIClient from "./APIClient"

test('testRecieveAnObject', async() => {
  apiClient = new APIClient();
  expect((await apiClient.load('r/aww')).length).toBeGreaterThan(0);
});
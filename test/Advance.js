import { expect } from "chai";
import { getData } from "../src/main";

describe("Test async with mocha", function () {
  it("check length of response data", async function () {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let data = await getData(url);
    expect(data.length).to.equal(11);
  });
});

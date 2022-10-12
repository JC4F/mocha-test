import { expect } from "chai";
import { getAssitanceList, postAssitanceVote } from "../src/main";

describe("Test api of help page", function () {
  let url, postVoteData, postAddData;

  before(()=>{
    url = 'http://localhost:8088/Rentabike/help-page';
    postVoteData = {
      type: '0',
      id: '1'
    };
    postAddData = {
      action: 'add',
      question: 'New Question',
      answer: 'New Answer'
    }
  });

  it("check response status code when getting data from help page", async function () {
    let dataRes = await getAssitanceList(url);
    expect(dataRes.SC).to.equal(1);
  });

  it("check response message when post vote data in help page", async function () {
    let dataRes = await postAssitanceVote(url, postVoteData);
    expect(dataRes.Mess).to.equal('Update quant Succesfully!');
  });

  it("check response status code when add new assistance data in help page", async function () {
    let dataRes = await postAssitanceVote(url, postAddData);
    expect(dataRes.SC).to.equal(1); 
  });
});

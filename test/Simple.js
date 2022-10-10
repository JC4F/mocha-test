import { expect } from 'chai';
import { add, substract } from '../src/main';

describe('Test logic math', function () {
    let sum, sub;

    before(()=>{
        sum = (1+2);
        sub = (6-2);
    });

    it('return 3 when adding 1+2', ()=>{
      expect(add(1, 2)).to.equal(sum);
    });

    it('return 4 when substract 6-2', ()=>{
      expect(substract(6, 2)).to.equal(sub);
    });
});
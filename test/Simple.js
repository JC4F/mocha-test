import { expect } from 'chai';
import { add, substract } from '../src/main';

describe('Test logic math', function () {
    it('return 3 when adding 1+2', ()=>{
      expect(add(1, 2)).to.equal(3);
    });

    it('return 4 when substract 6-2', ()=>{
      expect(substract(6, 2)).to.equal(4);
    });
});
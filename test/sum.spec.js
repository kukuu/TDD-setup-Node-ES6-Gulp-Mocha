import {expect} from 'chai';
import sum from '../src/sum.js';

describe('src/sum.js', () => {
    it('should add 1 + 9 to make 10', () => {
        let result = sum(1,9);

        expect(result).to.equal10);
    })

    it('should add 1, 2 and 3 to make six', () => {
        let result = sum(1,2,3);

        expect(result).to.equal(6);
    })
})

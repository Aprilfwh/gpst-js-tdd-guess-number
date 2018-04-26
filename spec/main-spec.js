var GuessNumber = require('../main/main.js');

describe('guess number()', function(){
    it('数字猜对位置也对',function () {
        let inputs =["1234", "1234"];
        let result = GuessNumber(inputs);
        expect(result).toEqual("4A0B");
    });
    it('数字猜对位置不对',function () {
        let inputs =["1234", "4321"];
        let result = GuessNumber(inputs);
        expect(result).toEqual("0A4B");
    });
});
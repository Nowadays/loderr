const _ = require("./index");

describe('loderr', function () {
    afterEach(function (){
        jest.restoreAllMocks();
    })

    it('should throw an error when calling _.add', function (){
        jest.spyOn(Math, 'random').mockReturnValueOnce(0.6);
        expect(() => {
            _.add(1, 2);
        }).toThrow(Error);
        jest.restoreAllMocks();
    })

    it('should not throw an error when calling _.add', function (){
        jest.spyOn(Math, 'random').mockReturnValueOnce(0.4)
        const result = _.add(1, 2);
        expect(result).toEqual(3);
        jest.restoreAllMocks();
    })
});

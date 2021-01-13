describe('random', function () {

    it('should return number equal or greater than 1', function () {
        for (let i = 0; i < 100; i++) {
            assert.isAtLeast(random(1, 3), 1);
        }
    });

    it('should return number equal or less than 3', function () {
        for (let i = 0; i < 100; i++) {
            assert.isBelow(random(1, 3), 3);
        }
    });
})
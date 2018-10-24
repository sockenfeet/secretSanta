const Assigner = require('../../Assigner');

describe('Assignment module', () => {
    describe('randomSelection', () => {
        it('should select an integer between 0 and the list length', () => {
            // Given
            const testList = [0,1,2,3];
            const limit = 4;
            //When
            const result = Assigner.randomSelection(testList);
            //Then
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(limit);
        })
    })
})

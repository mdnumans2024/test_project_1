const { fetchData } = require('../functions/api.js');

describe('fetchData', () => {

    
    it('should give us data in json', async () => {

            const fetchData = jest.fn();
        //Arrange
        fetchData.mockResolvedData({ id: 1, product: "A"});

        //Act
        const data = await fetchData();

        //Assert
        expect(data).toEqual({id: 1, product: "A"})
        expect(fetchData).toHaveBeenCalled();
    });
});
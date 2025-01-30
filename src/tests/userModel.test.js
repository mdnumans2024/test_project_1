const mongoose = require("mongoose");
const { createUser, User } = require("../functions/userModel.js");


describe("User model tests", () => {
    // Jest hook
    beforeEach(() => {
        // Clear all mocks before each test case
        jest.clearAllMocks();
    });

    describe("createUser", () => {
        // test dtypes, unique email, age boundry, validation/verification

        // AAA Pattern
        it('Should create the new user', async () => {

        // Arrange - Setup the variables
        const mockUser = {
                name: "Mahfuz Ahmed",
                email: "mahfuzniloy007@gmail.com",
                password: "12345",
                age: 69,
            };
        
        // Action
        jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);  
        const result = await createUser('Mahfuz Ahmed', 'mahfuzniloy007@gmail.com', '12345', 69);        


        // Assert
        expect(result).toEqual(expect.objectContaining(mockUser));
        expect(User.prototype.save).toHaveBeenCalledTimes(1);





    });
});
});
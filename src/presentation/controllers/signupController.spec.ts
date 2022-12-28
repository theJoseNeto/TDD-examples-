import SignupController from "./signupController"

describe("Signup Controller", () => { // Costuma-se colocar o nome do componente que estamos testando.

    test("Should return 400 if no name is provided", () => {

        const sut = new SignupController()
        const httpRequest = {
            body: {
                email: "any_email@email.com",
                password: "any password",
                passwordConfirmation: "any_password"
            }
        }
        const httResoponse = sut.handle(httpRequest)
        expect(httResoponse.statusCode).toBe(400)

    })

})
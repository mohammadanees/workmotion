/// <reference types="Cypress" />

class LoginPage {

    loginPage_emailAddressEdt="#email"
    loginPage_passwordFieldEdt="#password"
    loginPage_loginBtn="button[type='submit']"

visit(url){
    cy.visit(url)
}

fillEmail(emailAddressVal){
    const emailField=cy.get(this.loginPage_emailAddressEdt)
    emailField.clear()
    emailField.type(emailAddressVal)
}

fillPassword(passwordVal){
    const passwordField=cy.get(this.loginPage_passwordFieldEdt)
    passwordField.clear()
    passwordField.type(passwordVal)
}

clickLogin(){
    const loginBtn=cy.get(this.loginPage_loginBtn)
    loginBtn.click()
}

fnLoginApp(url, emailAddressVal, passwordVal){
    this.visit(url)
    this.fillEmail(emailAddressVal)
    this.fillPassword(passwordVal)
    this.clickLogin()
}

}

export default LoginPage
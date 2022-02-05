/// <reference types="Cypress" />

class DashboardPage {

    //dashboardPage_addEmployeeBtn="[data-testid='add-employee-menu']"
    dashboardPage_addEmployeeBtn=".kznAcN"
    
    dashboardPage_createNewBtn="[data-testid='create-new-item']"
    dashboardPage_selectCountryEdt="#react-select-3-input"
    dashboardPage_getStartedBtn="#onboarding-get-started-btn"
    actionItems_link="#sidebar-action-items-link"
    dashboardPage_IndiaCounty="input[value='IN']"
    dashboardPage_onboardingListLbl=".rXPcD >div:nth-child(2) span"
    actionPage_DashboardLnk="#sidebar-dashboard-link > .sc-hUpaCq > .sc-gSQFLo"
    
    createNew(){
        cy.get(this.dashboardPage_addEmployeeBtn).click()
        cy.get(this.dashboardPage_createNewBtn).click()
    }

    selectCountry(countryVal){
        cy.get(this.dashboardPage_selectCountryEdt).type(countryVal)
        cy.wait(3000)
        cy.get(this.dashboardPage_selectCountryEdt).focus().type("{enter}")
        // cy.get(this.dashboardPage_selectCountryEdt).click({force:true})
    }

    clickGetStarted(){
        cy.get(this.dashboardPage_getStartedBtn).click()
    }

    clickActionItems(){
        cy.get(this.actionItems_link).click()
    }

    fnGetStarted(countryVal){
        this.createNew()
        this.selectCountry(countryVal)
        this.clickGetStarted()
    }

}

export default DashboardPage
/// <reference types="Cypress" />

import ActionItemsPage from "../PageObjects/ActionItemsPage"
import AddEmployeePage from "../PageObjects/AddEmployeePage"
import DashboardPage from "../PageObjects/DashboardPage"
import LoginPage from "../PageObjects/LoginPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const addEmployeePage = new AddEmployeePage()
const actionItemsPage = new ActionItemsPage()

describe('Test Suite - employee profile',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })

    it('Test case - Validate employee profile', function(){
        loginPage.fnLoginApp(this.data.url, this.data.email, this.data.password)
        dashboardPage.fnGetStarted(this.data.country)
        addEmployeePage.fnFillContactDetails(this.data.talentFirstName, this.data.talentLastName, this.data.isEligibleToWork, this.data.isTalentExecutive, this.data.jobTitle, this.data.jobDescription, this.data.nameOfDirectManager, this.data.titleOfDirectManager, this.data.employmentType, this.data.workingSchedule, this.data.contractStartDate)
        addEmployeePage.fnFillContractClauses()
        addEmployeePage.fnFillSalaryCalculator()
        addEmployeePage.fnFillInviteEmployee()
        addEmployeePage.fnFillSummary()
        actionItemsPage.fnMarkApplicationAsDone()
        actionItemsPage.fnVerifyCompletedApplication(this.data.actionItemSubTitle, this.data.talentFirstName)
    })
})
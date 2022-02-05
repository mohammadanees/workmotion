/// <reference types="Cypress" />

class AddEmployeePage{

    addEmployee_talentFirstNameEdt="[placeholder*='first name']"
    addEmployee_talentLastNameEdt="[placeholder*='last name']"
    addEmployee_isEligibleToWork_Yes=".liqArc > div:nth-child(3) .cDpfNi > div > label:nth-child(1) p"
    addEmployee_isTalentExecutive_Yes=".liqArc > div:nth-child(4) .cDpfNi > div > label:nth-child(1) p"
    addEmployee_jobTitleEdt=".liqArc > div:nth-child(6) .cDpfNi > input"
    addEmployee_jobDescriptonEdt=".liqArc > div:nth-child(7) .cDpfNi > textarea"
    addEmployee_nameOfDirectManagerEdt=".liqArc > div:nth-child(9) .cDpfNi > input"
    addEmployee_titleOfDirectManagerEdt=".liqArc > div:nth-child(10) .cDpfNi > input"
    addEmployee_employmentType_fullTime=".liqArc > div:nth-child(11) .cDpfNi > div > label:nth-child(1) p"
    // addEmployee_workingScheduleDD2=".liqArc > div:nth-child(13) .cDpfNi > div > div > div"
    addEmployee_workingScheduleDD=".css-1hwfws3"
    addEmployee_workingSchedule_FixedHour="input[value='Fixed Hour']"
    addEmployee_contractStartDate=".liqArc > div:nth-child(16) .cDpfNi input"
    addEmployee_continueBtn="#onboarding-continue-btn"
    contractClauses_paidTimeOffEdt=".liqArc .fZytyq:nth-child(1) .hPagic"
    // contractClauses_paidTimeOffEdt="[id='1638df41-c25f-3419-a258-ce5991eb986e']"
    salaryCalculator_baseSalaryEdt=".VINAJ+[class*='jvTQHa']"
    salaryCalculator_Overtime=".liqArc .fZytyq:nth-child(4) .cDpfNi:nth-child(2) > div > label:nth-child(1) > p"
    salaryCalculator_calculateBtn="[name='calculate']"
    inviteEmployee_talentEmail="[type='email']"
    summaryReview_consent=".MbXAj"
    summaryReview_finish="[name='proceed-4']"

    fillTalentFirstName(talentFirstNameVal){
        cy.get(this.addEmployee_talentFirstNameEdt).type(talentFirstNameVal)
    }

    fillTalentLastName(talentLastNameVal){
        cy.get(this.addEmployee_talentLastNameEdt).type(talentLastNameVal)
    }

    selectEligibileToWork(isEligibleToWorkVal){
        if (isEligibleToWorkVal=="Yes") {
            cy.get(this.addEmployee_isEligibleToWork_Yes).click()
        }
    }

    selectTalentExecutive(isTalentExecutiveVal){
        if (isTalentExecutiveVal=="Yes") {
            cy.get(this.addEmployee_isTalentExecutive_Yes).click()
        }
    }

    fillJobTitle(jobTitileVal){
        cy.get(this.addEmployee_jobTitleEdt).type(jobTitileVal)
    }

    filljobDescription(jobDescriptionVal){
        cy.get(this.addEmployee_jobDescriptonEdt).type(jobDescriptionVal)
    }

    fillNameOfManager(nameOfManagerVal){
        cy.get(this.addEmployee_nameOfDirectManagerEdt).type(nameOfManagerVal)
    }

    fillTitleOfManager(titleOfManagerVal){
        cy.get(this.addEmployee_titleOfDirectManagerEdt).type(titleOfManagerVal)
    }

    selectEmploymentType(employmentTypeVal){
        if (employmentTypeVal=="full-time") {
            cy.get(this.addEmployee_employmentType_fullTime).type(employmentTypeVal)
        }
    }

    //create login or dropdown
    selectWorkingSchedule(workingScheduleVal){
        cy.get(this.addEmployee_workingScheduleDD).type(workingScheduleVal)
        cy.get(this.addEmployee_workingSchedule_FixedHour).focus().type("{enter}")
    }

    fillContractStartDate(contractStartDateVal){
        cy.get(this.addEmployee_contractStartDate).type(contractStartDateVal)
    }

    clickContinue(){
        cy.get(this.addEmployee_continueBtn).click()
    }

    fnFillContactDetails(talentFirstNameVal, talentLastNameVal, isEligibleToWorkVal, isTalentExecutiveVal, jobTitileVal, jobDescriptionVal, nameOfManagerVal, titleOfManagerVal, employmentTypeVal , workingScheduleVal, contractStartDateVal){
        this.fillTalentFirstName(talentFirstNameVal)
        this.fillTalentLastName(talentLastNameVal)
        this.selectEligibileToWork(isEligibleToWorkVal)
        this.selectTalentExecutive(isTalentExecutiveVal)
        this.fillJobTitle(jobTitileVal)
        this.filljobDescription(jobDescriptionVal)
        this.fillNameOfManager(nameOfManagerVal)
        this.fillTitleOfManager(titleOfManagerVal)
        this.selectEmploymentType(employmentTypeVal)
        this.selectWorkingSchedule(workingScheduleVal)
        this.fillContractStartDate(contractStartDateVal)
        this.clickContinue()
    }

    //contract clauses

    fillPaidTimeOff(){
        cy.get(this.contractClauses_paidTimeOffEdt)
        .clear()
        .type("30")
    }

    fnFillContractClauses(){
        this.fillPaidTimeOff()
        this.clickContinue()
    }

    //Salary Calculator

    fillBaseSalary(){
        cy.get(this.salaryCalculator_baseSalaryEdt).type("10000")
    }

    selectOverTime(){
        cy.get(this.salaryCalculator_Overtime).click()
    }

    clickCalculate(){
        cy.get(this.salaryCalculator_calculateBtn).click()
    }

    fnFillSalaryCalculator(){
        this.fillBaseSalary()
        this.selectOverTime()
        this.clickCalculate()
        this.clickContinue()
    }

    //Invite Employee
    
    fillTalentEmail(){
        let emailPart=Math.floor(Math.random()*1000)
        cy.get(this.inviteEmployee_talentEmail).type("aa"+ emailPart + "@aa.com")
    }

    fnFillInviteEmployee(){
        this.fillTalentEmail()
        this.clickContinue()
    }

    // Summary Review
    clickConsent(){
        cy.get(this.summaryReview_consent).click()
    }

    clickFinish(){
        cy.get(this.summaryReview_finish).click()
    }

    fnFillSummary(){
        this.clickConsent()
        this.clickFinish()
    }
}

export default AddEmployeePage
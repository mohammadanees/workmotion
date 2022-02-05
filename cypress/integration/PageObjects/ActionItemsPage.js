/// <reference types="Cypress" />

import DashboardPage from "./DashboardPage"

const dashboardPage = new DashboardPage()

class ActionItemsPage{
    // actionPage_DashboardLnk="#sidebar-dashboard-link > .sc-hUpaCq > .sc-gSQFLo"
    actionPage_actionItemsLnk="#sidebar-action-items-link > .sc-hUpaCq > .sc-gSQFLo"
    // actionPage_markAsDoneBtn=".rXPcD > .beCXJw:nth-child(4) .sc-fIITEw > .fzOfah"

    actionPage_markAsDoneBtn =':nth-child(4) > [style="display: flex; align-items: center; width: 230px;"] > #action-items-mark-done-btn > .sc-eCImPb'
    // actionPage_filterBtn=".kjOBnV"
    actionPage_filterBtn=".rXPcD header button > span"

    // actionPage_filterDoneBtn="[data-menu-id*='COMPLETED']"
    actionPage_filterDoneBtn=".rc-dropdown-menu-root > li:nth-child(4)"

    actionPage_filterPendinBtn=".rc-dropdown-menu-root > li:nth-child(3)"
    actionPage_applicationLbl=".rXPcD > section:nth-child(4) h4>span"
    actionPage_applicationStatus=".rXPcD > section:nth-child(4) h4>div > span"
    actionPage_completedActionsLbl=".jfLck"
    actionPage_uncompletedActionsLbl=".rXPcD h3"

    clickActionItemsLink(){
        cy.get(this.actionPage_actionItemsLnk).click()
        cy.get(this.actionPage_uncompletedActionsLbl).invoke('text').then((text1) => {
            expect(text1).to.include("Uncompleted actions")

        })
        cy.get(dashboardPage.actionPage_DashboardLnk).click()
        cy.get(dashboardPage.dashboardPage_onboardingListLbl).invoke('text').then((text1) => {
            expect(text1).to.include("Onboarding list")

        })
        cy.get(this.actionPage_actionItemsLnk).click()
    }

    clickMarkAsDone(){
        cy.get(this.actionPage_markAsDoneBtn).click()
    }

    fnMarkApplicationAsDone(){
        this.clickActionItemsLink()
        this.clickMarkAsDone()
    }

    filterApplication(){
        cy.get(this.actionPage_filterBtn).click()
        cy.get(this.actionPage_filterDoneBtn).click()
    }


    fnVerifyCompletedApplication(expSubTitle, expApplicationLbl){
        this.filterApplication()
        cy.get(this.actionPage_completedActionsLbl).invoke('text').then((text1) => {
            expect(text1).to.include(expSubTitle)

        })
        cy.get(this.actionPage_applicationLbl).invoke('text').then((text1) => {
            expect(text1).to.include(expApplicationLbl)

        })
    }

}
export default ActionItemsPage
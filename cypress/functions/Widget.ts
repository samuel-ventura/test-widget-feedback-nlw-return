class Widget {
  validAccess() {
    cy.visit('/')
  }

  clickButtonWidget() {
    cy.get('button[id="headlessui-popover-button-:r0:"]')
    .click()
  }
  
  openIssueForm(issue: string, issueName: string) {
    let classIssueButton = "bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
    cy.get(`button[class="${classIssueButton}"] img[alt="${issue}"]`)
    .click()
    cy.get('span[class="text-xl leading-6 flex items-center gap-2"]').should('have.text', issueName)
  }

  clickOnBackArrow() {
    cy.get('button[class="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"]').click()
  }
}

export default Widget;
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

  validateButton(assert: string) {
    cy.get('button[type="submit"]').should(`${assert}`)
  }

  validateChangeScreenshotIcon() {
    let initClassButton = 'p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500'
    let onChangeClassButton = 'p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
    cy.get(`button[class="${initClassButton}"]`).click()
    cy.get(`button[class="${onChangeClassButton}"]`).should('exist')
  }

  typeInForm(text: string) {
    cy.get('textarea').type(text)
  }

  sendFeedback() {
    cy.get('button[type="submit"]').click()
  }

  closeWidget() {
    cy.get('button[class="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"]').click() 
  }

  validateModalFeedbackSuccess() {
    let classButton = "py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    cy.get(`button[class="${classButton}"]`).should('exist')
  }
}

export default Widget;
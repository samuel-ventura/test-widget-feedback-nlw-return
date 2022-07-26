class Widget {
  validAccess() {
    cy.visit('/')
  }

  clickButtonWidget() {
    cy.get('button[id="headlessui-popover-button-:r0:"]')
    .click()
  }
  
  openIssueForm(issue: string) {
    let classButton = "bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
    cy.get(`button[class="${classButton}"] img[alt="${issue}"]`)
    .click()
  }
}

export default Widget;
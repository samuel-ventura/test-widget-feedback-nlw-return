import Widget from "functions/Widget";

describe('Home', () => {
  let widget = new Widget();

  const issues = [
    {name: 'Problema', value: "Imagem de um inseto"},
    {name: 'Ideia', value: "Imagem de uma lâmpada" },
    {name: 'Outro', value: "Imagem de um balão de pensamento"}
  ]

  it('should open widget feedback on click', () =>{
    widget.validAccess()
    widget.clickButtonWidget()
    cy.get('span[class="text-xl leading-6"]').should('have.text', 'Deixe seu feedback')
  })

  context('Open Issues Forms', ()=> {  
    before(() => {
      widget.validAccess()
      widget.clickButtonWidget()
    })
    
    afterEach(() =>{
      widget.clickOnBackArrow()
    })

    issues.forEach((issue) => {
      it(`should open the issue form "${issue.name}"`, ()=> {
        widget.openIssueForm(issue.value, issue.name)
      })
    })
  })

  it('should not be possible to send a feedback without a description', () => {
    widget.validAccess()
    widget.clickButtonWidget()
    widget.openIssueForm(issues[0].value, issues[0].name)
    widget.validateButton('be.disabled')
  })

  it('should change the camera icon when clicked for take a screenshot', () => {
    widget.validAccess()
    widget.clickButtonWidget()
    widget.openIssueForm(issues[1].value, issues[1].name)
    widget.validateChangeScreenshotIcon()
  })

  it('should be possible to send a feedback', () => {
    let typeIssueOnForm = 'Tive um problema com o pagamento'
    widget.validAccess()
    widget.clickButtonWidget()
    widget.openIssueForm(issues[2].value, issues[2].name)
    widget.typeInForm(typeIssueOnForm)
    widget.validateButton('be.enabled')
    widget.sendFeedback()
    widget.validateModalFeedbackSuccess()
  })

  it('should be possible to close the widget', () => {
    widget.validAccess()
    widget.clickButtonWidget()
    widget.closeWidget()
    cy.get('div[id="headlessui-popover-panel-:r1:"]').should('not.exist')
  })
})
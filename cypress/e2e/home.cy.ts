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

  context('Open Issues Form', ()=> {
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

})

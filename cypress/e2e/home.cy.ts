import Widget from "functions/Widget";

describe('Home', () => {
  let widget = new Widget();

  it('should open widget feedback on click', () =>{
    widget.validAccess()
    widget.clickButtonWidget()
  })

  context('Open Issues Form', ()=> {
    before(() => {
      widget.validAccess()
      widget.clickButtonWidget()
    })
    
    afterEach(() =>{
      
    })

    const issues = [
      {name: 'Problema', value: "Imagem de um inseto"},
      {name: 'Ideia', value: "Imagem de uma lâmpada" },
      {name: 'Outro', value: "Imagem de um balão de pensamento"}
    ]

    issues.forEach((issue) => {
      it(`should open the issue form "${issue.name}"`, ()=> {
        widget.openIssueForm(issue.value)
      })
    })
  })
})

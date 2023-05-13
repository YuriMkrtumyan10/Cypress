        const DASHBOARD_URL = 'https://elearning.aua.am/my/'
        const LOGIN_URL = 'https://elearning.aua.am/login/index.php'
        const INVALID_LOGIN = 'invalidusername'
        const INVALID_PASSWORD = 'invalidpassword'

        // Enter valid username and password
        const VALID_LOGIN = 'valid'
        const VALID_PASSWORD = 'valid'

        describe('Unsuccessful Login', () => {
            it('Should show an error message', () => {
            cy.visit(LOGIN_URL)
            cy.get('input[id="UserName"]').type(INVALID_LOGIN)
            cy.get('input[id="Password"]').type(INVALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
            cy.get('div[id="loginerrormessage"]').should('have.css', 'display', 'block')
            })
        })


        describe('Successful Login', () => {
            it('Should change the page to the Dashboard', () => {
            cy.visit(LOGIN_URL)
            // Enter valid username and password

            cy.get('input[id="UserName"]').type(VALID_LOGIN)
            cy.get('input[id="Password"]').type(VALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
            cy.url().should('eq', DASHBOARD_URL)  })
        })


      describe('Dashboard Test', () =>{
        it('Checks the title and URL of the dashboard', () =>{
             cy.visit(LOGIN_URL)

            // Enter valid username and password
            cy.get('input[id="UserName"]').type(VALID_LOGIN)
            cy.get('input[id="Password"]').type(VALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
             cy.url().should('eq', DASHBOARD_URL)

             // Check the title
             cy.title().should('eq', "Dashboard")

        })
      })

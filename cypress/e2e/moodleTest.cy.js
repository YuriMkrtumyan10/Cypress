        const DASHBOARD_URL = 'https://elearning.aua.am/my/'
        const LOGIN_URL = 'https://elearning.aua.am/login/index.php'
        const INVALID_LOGIN = 'invalidusername'
        const INVALID_PASSWORD = 'invalidpassword'

        // Enter valid username and password
        const VALID_LOGIN = 'Enter valid username and password'
        const VALID_PASSWORD = 'Enter valid username and password'

        describe('Unsuccessful Login', () => {
            it('Should show an error message', () => {
            cy.visit(LOGIN_URL)
            cy.get('input[id="username"]').type(INVALID_LOGIN)
            cy.get('input[id="password"]').type(INVALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
            cy.get('#loginerrormessage').should('be.visible')
            })
        })


        describe('Successful Login', () => {
            it('Should change the page to the Dashboard', () => {
            cy.visit(LOGIN_URL)
            // Enter valid username and password

            cy.get('input[id="username"]').type(VALID_LOGIN)
            cy.get('input[id="password"]').type(VALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
            cy.url().should('eq', DASHBOARD_URL)  })
        })


      describe('Dashboard Test', () =>{
        it('Checks the title and URL of the dashboard', () =>{
             cy.visit(LOGIN_URL)

            // Enter valid username and password
            cy.get('input[id="username"]').type(VALID_LOGIN)
            cy.get('input[id="password"]').type(VALID_PASSWORD)
            cy.get('button[id="loginbtn"]').click()
             cy.url().should('eq', DASHBOARD_URL)

             // Check the title
             cy.title().should('eq', "Dashboard")

        })
      })

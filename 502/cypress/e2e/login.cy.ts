describe('Login Page', () => {
    beforeEach(() => {
      cy.visit('/login');
    });
  
    it('logs in successfully with valid credentials', () => {
      cy.get('input[name="username"]').type('admin');
      cy.get('input[name="password"]').type('anyPassword');
      cy.contains('Submit').click();
      cy.url().should('include', '/dashboard');
      cy.contains('Admin');
    });
  
    it('shows error with invalid credentials', () => {
      cy.get('input[name="username"]').type('wrong');
      cy.get('input[name="password"]').type('wrong');
      cy.contains('Submit').click();
      cy.contains('Invalid username or password');
    });
  });
  
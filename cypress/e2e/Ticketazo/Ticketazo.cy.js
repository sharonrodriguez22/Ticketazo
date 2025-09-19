describe('Registro Usuario', () => {
    const POTicketazo = 'Tests/Ticketazo';
    let peTicketazo;

    beforeEach(() => {
        cy.fixture(POTicketazo).then(($json) => { peTicketazo = $json});
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
   
    })

   
    it('Password error, minimum characters', () => {
        cy.get(peTicketazo.txt_Name).type(peTicketazo.data.Name);
        cy.get(peTicketazo.txt_LastName).type(peTicketazo.data.LastName);
        cy.get(peTicketazo.txt_Phone).type(peTicketazo.data.Phone);
        cy.get(peTicketazo.txt_Dni).type(peTicketazo.data.Dni);
        cy.get(peTicketazo.cmb_Province).click();
        cy.get(peTicketazo.cmb_Province).type('Ciudad Autonoma de Buenos Aires{enter}');
        cy.get(peTicketazo.cmb_Location).click();
        cy.get(peTicketazo.cmb_Location).type('Recoleta{enter}');
        cy.contains("dd").type(peTicketazo.data.Date);
        cy.get(peTicketazo.txt_Email).click();
        cy.get(peTicketazo.txt_Email).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_ConfirmarEmail).click();
        cy.get(peTicketazo.txt_ConfirmarEmail).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_Password).type('12345678');
        cy.get(peTicketazo.txt_ConfirmPassword).type('12345678');
        cy.get(peTicketazo.btn_Registrarse).click();
        cy.get('[data-cy="error-message"]').contains('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.')
    });

    it('Passwords do not match', () => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
        cy.get(peTicketazo.txt_Name).type(peTicketazo.data.Name);
        cy.get(peTicketazo.txt_LastName).type(peTicketazo.data.LastName);
        cy.get(peTicketazo.txt_Phone).type(peTicketazo.data.Phone);
        cy.get(peTicketazo.txt_Dni).type(peTicketazo.data.Dni);
        cy.get(peTicketazo.cmb_Province).click();
        cy.get(peTicketazo.cmb_Province).type('Ciudad Autonoma de Buenos Aires{enter}');
        cy.get(peTicketazo.cmb_Location).click();
        cy.get(peTicketazo.cmb_Location).type('Recoleta{enter}');
        cy.contains("dd").type(peTicketazo.data.Date);
        cy.get(peTicketazo.txt_Email).click();
        cy.get(peTicketazo.txt_Email).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_ConfirmarEmail).click();
        cy.get(peTicketazo.txt_ConfirmarEmail).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_Password).type('Prueba12!');
        cy.get(peTicketazo.txt_ConfirmPassword).type('Prueba123!');
        cy.get(peTicketazo.btn_Registrarse).click();
        cy.get('[data-cy="error-message"]').contains('Las contraseñas no coinciden')
    });
    
    it('Emails do not match', () => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
        cy.get(peTicketazo.txt_Name).type(peTicketazo.data.Name);
        cy.get(peTicketazo.txt_LastName).type(peTicketazo.data.LastName);
        cy.get(peTicketazo.txt_Phone).type(peTicketazo.data.Phone);
        cy.get(peTicketazo.txt_Dni).type(peTicketazo.data.Dni);
        cy.get(peTicketazo.cmb_Province).click();
        cy.get(peTicketazo.cmb_Province).type('Ciudad Autonoma de Buenos Aires{enter}');
        cy.get(peTicketazo.cmb_Location).click();
        cy.get(peTicketazo.cmb_Location).type('Recoleta{enter}');
        cy.contains("dd").type(peTicketazo.data.Date);
        cy.get(peTicketazo.txt_Email).click();
        cy.get(peTicketazo.txt_Email).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_ConfirmarEmail).click();
        cy.get(peTicketazo.txt_ConfirmarEmail).type(peTicketazo.dataError.EmailError);
        cy.get(peTicketazo.txt_Password).type('Prueba123!');
        cy.get(peTicketazo.txt_ConfirmPassword).type('Prueba123!');
        cy.get(peTicketazo.btn_Registrarse).click();
        cy.get('[data-cy="error-message"]').contains('Los correos electrónicos no coinciden');
        
    });

    it('DNI minimum characters', () => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
        cy.get(peTicketazo.txt_Name).type(peTicketazo.data.Name);
        cy.get(peTicketazo.txt_LastName).type(peTicketazo.data.LastName);
        cy.get(peTicketazo.txt_Phone).type(peTicketazo.data.Phone);
        cy.get(peTicketazo.txt_Dni).type(peTicketazo.dataError.DniMinCaracters);
        cy.get(peTicketazo.cmb_Province).click();
        cy.get(peTicketazo.cmb_Province).type('Ciudad Autonoma de Buenos Aires{enter}');
        cy.get(peTicketazo.cmb_Location).click();
        cy.get(peTicketazo.cmb_Location).type('Recoleta{enter}');
        cy.contains("dd").type(peTicketazo.data.Date);
        cy.get(peTicketazo.txt_Email).click();
        cy.get(peTicketazo.txt_Email).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_ConfirmarEmail).click();
        cy.get(peTicketazo.txt_ConfirmarEmail).type(peTicketazo.data.Email);
        cy.get(peTicketazo.txt_Password).type('Prueba123!');
        cy.get(peTicketazo.txt_ConfirmPassword).type('Prueba123!');
        cy.get(peTicketazo.btn_Registrarse).click();
        cy.get('[data-invalid="true"] > .hidden').contains('Utiliza un formato que coincida con el solicitado');
    });


})
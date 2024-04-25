class LoginPage {
    loginMethod(email, password) {
        cy.visit("/");
        cy.get("input[type='email']").type(email);
        cy.get("input[name=password]").type(password);
        cy.get('button[type="button"]').first().click();
    }

    successfulLoginAssertion() {
        cy.intercept({
            method: 'GET',
            path: '/api/companies',
        }).as('waitForDashvboardLoad')
        cy.wait('@waitForDashvboardLoad');
        cy.get('[data-cy="header_wrapper"]').should("have.text", "Dashboard");
    }


    logoutFunction() {
        cy.get('button[data-cy="user_profile_button"]').click();
        cy.get('button[data-cy="user_profile_logout"]').click();
        cy.get('[data-cy="login-heading"]').contains("Log in to Clientshare");
    };

    typeEmail(email) {
        cy.get("input[name=email]").type(email);
    }

    typePassword(password) {
        cy.get("input[name=password]").type(password);
    }

    clickLoginButton() {
        cy.get('button[type="button"]').first().click();
    }

    blankEmailError() {
        cy.get(".c0135").should("have.text", "This field is required");
    }

    blankPasswordError() {
        cy.get(".c0135").should("have.text", "This field is required");
    }

    blankEmailPasswordError() {
        cy.get("span.c0135").should("have.length", 2);
    }

    invalidLoginAssertion() {
        cy.get('[data-cy="auth-error-message"]').should(
            "have.text",
            "The email or password you entered is incorrect"
        );
    }

    clickOnUserProfileButton() {
        cy.get('button[data-cy="user_profile_button"]').click();
    }

    clickOnLogoutButton() {
        cy.get('button[data-cy="user_profile_logout"]').click();
    }

    logoutAssertionText() {
        cy.get('[data-cy="login-heading"]').contains("Log in to Clientshare");
    }



    clickOnWorkspaceSettingLink() {
        cy.get('a[data-cy="user_profile_workspace_settings_link"]').should("be.visible").click();
    }

    assertWorkspaceSettingPage() {
        cy.log("**--Asserting that user landed on workspace settings page--**");
        cy.get('[data-cy="header_wrapper"]').should("contain", "Workspace settings");
        cy.url().should("include", "/workspace-settings");
    }

    assertPrivacyNoticeAttributes() {
        cy.get('[data-cy="user_profile_privacy_link"]').should("have.attr", "target", "_blank");
        cy.get('[data-cy="user_profile_privacy_link"]').should("exist");
        cy.get('[data-cy="user_profile_privacy_link"]')
            .should("have.attr", "href")
            .and("include", "https://pulse-public-files.s3.eu-west-2.amazonaws.com/privacy_notice.pdf");
    }

    assertKnowledgeCentreAttributes() {
        cy.get('[data-cy="user_profile_knowledge_center_link"]').should(
            "have.attr",
            "target",
            "_blank"
        );
        cy.get('[data-cy="user_profile_knowledge_center_link"]')
            .should("have.attr", "href")
            .and("include", "https://www.myclientshare.com/knowledge-centre-pulse");

        cy.get('[data-cy="user_profile_knowledge_center_link"]').invoke("removeAttr", "target").click();
    }
}

export default LoginPage;

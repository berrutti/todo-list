/* eslint-disable jest/valid-expect */

describe("todo app", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("can add new tasks", () => {
    cy.get("#add-task-input").type("Take out the trash");
    cy.get("#add-task-button").click();
    cy.get("li").find("label").should("have.text", "Take out the trash");
  });

  it("shows the creation time of the task", () => {
    cy.get("li")
      .find("label")
      .invoke("attr", "title")
      .should("contain", "Created:");
  });

  it("shows the edition time of the task when the task is edited", () => {
    cy.get("li").find('[data-test-id="edit-icon"]').click();
    cy.get("li").find("input").type("Pet the dog");
    cy.get("li").find('[data-test-id="save-icon"]').click();
    cy.get("li")
      .find("label")
      .invoke("attr", "title")
      .should("contain", "Last Updated:");
    cy.get("li")
      .find("label")
      .should("have.text", "Pet the dog");
  });

  it("can check off task as completed", () => {
    cy.get("li").click();
    cy.get("li").should("not.exist");
  });

  it("filters tasks by status", () => {
    cy.get('[data-test-id="done-tasks-button"]').click();
    cy.get('[data-test-id="all-tasks-button"]').click();
    cy.get("li").should("exist");
  });

  it("removes tasks when the delete button is clicked", () => {
    cy.get('[data-test-id="delete-icon"]').click();
    cy.get("li").should("not.exist");
  });
});

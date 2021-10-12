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

  it("shows the creation time of the task", () => {});

  it("shows the edition time of the task when the task is edited", () => {});

  it("can check off task as completed", () => {});

  it("filters tasks by status", () => {});

  it("removes tasks when the delete button is clicked");
});

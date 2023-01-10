import request from "supertest";
import app from "../app.js";

describe("Test the root path ", () => {
  test("It should response to the get method ", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Should rerurn code status 200  ", () => {
  test("It should response to the get method ", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Should return non key in response  ", () => {
  test("It should response to the get method ", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.body[0].nom).toBe("HACH");
      });
  });
});

describe(" Retreive a contact with his id ", () => {
  test("It should response to the get method ", () => {
    request(app)
      .get("/api/contact/" + 1)
      .then((response) => {
        expect(response.body.id).toBe("1");
        expect(response.body.nom).toBe("HACH");
        expect(response.body.tele).toBe("06066006");
      });
  });
});

describe("Check the contact don't exist  ", () => {
  test("It should response to the get method ", () => {
    request(app)
      .get("/api/contact/" + 5)
      .then((response) => {
        expect(response.body.id).toBe(undefined);
      });
  });
});

import request from ("supertest");
import app from("../app.js");

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

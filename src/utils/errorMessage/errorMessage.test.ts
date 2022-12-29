import errorMessage from "./errorMessage";
import errorResponses from "./constants";

describe("errorMessage", () => {
  const response = {
    config: {},
    data: "some data",
    headers: {},
    request: new XMLHttpRequest(),
    status: 200,
    statusText: ""
  };

  test("returns a message containing 400 status code", () => {
    response.status = 400;
    const output = errorMessage(response);
    expect(output).toContain(errorResponses["400"]);
  });

  test("returns a message containing 403 status code", () => {
    response.status = 403;
    const output = errorMessage(response);
    expect(output).toContain(errorResponses["403"]);
  });

  test("returns a message containing 404 status code", () => {
    response.status = 404;
    const output = errorMessage(response);
    expect(output).toContain(errorResponses["404"]);
  });

  test("returns a message containing 500 status code", () => {
    response.status = 500;
    const output = errorMessage(response);
    expect(output).toBe(response.data);
  });

  test("returns a message containing 503 status code", () => {
    response.status = 503;
    const output = errorMessage(response);
    expect(output).toContain(errorResponses["503"]);
  });

  test("returns a message when status code is different from the above", () => {
    response.status = 512;
    const output = errorMessage(response);
    expect(output).toContain("An unknown error occured");
  });
});

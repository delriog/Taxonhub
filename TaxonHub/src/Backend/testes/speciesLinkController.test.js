const app = require("../config/express");
const request = require("supertest");
const { data } = require("./mocksSplink");

test("testando busca Species Link ", async () => {
  const response = await request(app)
    .get("/speciesLink");
    //console.log(response.body)
  expect(response.statusCode).toEqual(200);
});

test("testando busca Species Link primeiro resultado", async () => {
    const response = await request(app)
      .get("/speciesLink");
    expect(response.statusCode).toEqual(200);
    expect(response.body.result[0]).toEqual(data.result[0]);
});

test('verifica o local', async () => {
    const response = await request(app)
      .get("/speciesLink");
    expect(response.statusCode).toEqual(200);
    expect(response.body.result[1].county).toBe('Jales');  // Make an assertion on the result
});

test('verifica a instituição de coleta', async () => {
    const response = await request(app)
      .get("/speciesLink");
    expect(response.statusCode).toEqual(200);
    expect(response.body.result[2].institutionCode).toBe('USP');  // Make an assertion on the result
});

test('verifica o ano identificado', async () => {
    const response = await request(app)
      .get("/speciesLink");
    expect(response.statusCode).toEqual(200);
    expect(response.body.result[3].yearIdentified).toBe('2015');  // Make an assertion on the result
});

test('verifica o codigo da coleção da coleta', async () => {
    const response = await request(app)
      .get("/speciesLink");
    expect(response.statusCode).toEqual(200);
    expect(response.body.result[4].collectionCode).toBe('SPF');  // Make an assertion on the result
});
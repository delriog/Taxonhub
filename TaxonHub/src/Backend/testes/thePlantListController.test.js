const app = require("../config/express");
const request = require("supertest");
const { listTPLAzurea } = require("./mocksTPL");

test("testando busca TPL Eichhornia azurea ", async () => {
  const response = await request(app)
    .post("/theplantlist")
    .send({ names: ["Eichhornia azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listTPLAzurea);
});

test("testando busca vazia ", async () => {
  const response = await request(app)
    .post("/theplantlist")
    .send({ names: [""] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("testando busca vazia 2 ", async () => {
  const response = await request(app)
    .post("/theplantlist")
    .send({ names: ["           "] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("testando busca vazia 2 ", async () => {
  const response = await request(app)
    .post("/theplantlist");
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

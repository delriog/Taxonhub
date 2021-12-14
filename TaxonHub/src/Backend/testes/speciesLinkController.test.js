const buscaDireta = require('../api/controllers/speciesLinkController');

it('returns the data of the api', async () => {
  const data = await buscaDireta();  // Run the function
  expect(data).toHaveBeenCalledWith(expect.any(Function));  // Make an assertion on the result
});
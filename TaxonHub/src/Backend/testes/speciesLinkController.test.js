const index = require('../api/controllers/speciesLinkController')
test('Verificar Busca', () => {
    const result = index.controller.speciesLink();
    expect(result[0].record_id).toEqual(1);
})
const buscaDireta = require('../api/controllers/speciesLinkController');

let data = {
    result: [
        {
        record_id: '1',
        modified: '2019-11-13 11:20:35-03',
        institutionCode: 'USP',
        collectionCode: 'SPF',
        catalogNumber: '118488',
        basisOfRecord: 'PreservedSpecimen',
        kingdom: 'Plantae',
        family: 'Lamiaceae',
        genus: 'Cantinoa',
        specificEpithet: 'althaeifolia',
        scientificName: 'Cantinoa althaeifolia',
        scientificNameAuthorship: '(Pohl ex Benth.) Harley & J.F.B.Pastore',
        identifiedBy: 'Silva-Luz, CL',
        yearIdentified: '2015',
        recordedBy: 'Paula-Souza, J',
        recordNumber: '519',
        year: '1996',
        month: '04',
        day: '27',
        country: 'Brasil',
        stateProvince: 'São Paulo',
        county: 'Angatuba',
        decimalLongitude: '-48.4099998474121',
        decimalLatitude: '-23.4899997711182',
        coordinatePrecision: '29114',
        barcode: 'SPF00118488',
        imagecode: 'SPF00118488',
        geoFlag: 'auto'
      },
      {
        record_id: '2',
        modified: '2019-11-13 11:20:35-03',
        institutionCode: 'USP',
        collectionCode: 'SPF',
        catalogNumber: '12711',
        basisOfRecord: 'PreservedSpecimen',
        kingdom: 'Plantae',
        family: 'Lamiaceae',
        genus: 'Cantinoa',
        specificEpithet: 'althaeifolia',
        scientificName: 'Cantinoa althaeifolia',
        scientificNameAuthorship: '(Pohl ex Benth.) Harley & J.F.B.Pastore',
        identifiedBy: 'Silva-Luz, CL',
        yearIdentified: '2015',
        recordedBy: 'Hoehne, W',
        recordNumber: 's.n.',
        year: '1950',
        month: '04',
        day: '16',
        country: 'Brasil',
        stateProvince: 'São Paulo',
        county: 'Jales',
        decimalLongitude: '-50.5400009155273',
        decimalLatitude: '-20.2600002288818',
        coordinatePrecision: '16486',
        barcode: 'SPF00012711',
        imagecode: 'SPF00012711',
        geoFlag: 'auto'
      },
      {
        record_id: '3',
        modified: '2019-11-13 11:20:35-03',
        institutionCode: 'USP',
        collectionCode: 'SPF',
        catalogNumber: '31261',
        basisOfRecord: 'PreservedSpecimen',
        kingdom: 'Plantae',
        family: 'Lamiaceae',
        genus: 'Cantinoa',
        specificEpithet: 'althaeifolia',
        scientificName: 'Cantinoa althaeifolia',
        scientificNameAuthorship: '(Pohl ex Benth.) Harley & J.F.B.Pastore',
        identifiedBy: 'Silva-Luz, CL',
        yearIdentified: '2015',
        recordedBy: 'Joly, AB',
        recordNumber: 's.n.',
        year: '1946',
        month: '06',
        day: '25',
        country: 'Brasil',
        stateProvince: 'São Paulo',
        county: 'São Paulo',
        decimalLongitude: '-46.6300010681152',
        decimalLatitude: '-23.5400009155273',
        coordinatePrecision: '53584',
        barcode: 'SPF00031261',
        imagecode: 'SPF00031261',
        geoFlag: 'auto'
      },
      {
        record_id: '4',
        modified: '2019-11-13 11:20:35-03',
        institutionCode: 'USP',
        collectionCode: 'SPF',
        catalogNumber: '31250',
        basisOfRecord: 'PreservedSpecimen',
        kingdom: 'Plantae',
        family: 'Lamiaceae',
        genus: 'Cantinoa',
        specificEpithet: 'althaeifolia',
        scientificName: 'Cantinoa althaeifolia',
        scientificNameAuthorship: '(Pohl ex Benth.) Harley & J.F.B.Pastore',
        identifiedBy: 'Silva-Luz, CL',
        yearIdentified: '2015',
        recordedBy: 'Hoehne, W',
        recordNumber: 's.n.',
        year: '1933',
        month: '04',
        day: '24',
        country: 'Brasil',
        stateProvince: 'São Paulo',
        county: 'São Paulo',
        decimalLongitude: '-46.6300010681152',
        decimalLatitude: '-23.5400009155273',
        coordinatePrecision: '53584',
        barcode: 'SPF00031250',
        imagecode: 'SPF00031250',
        geoFlag: 'auto'
      },
      {
        record_id: '5',
        modified: '2019-11-13 11:20:35-03',
        institutionCode: 'USP',
        collectionCode: 'SPF',
        catalogNumber: '13809',
        basisOfRecord: 'PreservedSpecimen',
        kingdom: 'Plantae',
        family: 'Lamiaceae',
        genus: 'Cantinoa',
        specificEpithet: 'althaeifolia',
        scientificName: 'Cantinoa althaeifolia',
        scientificNameAuthorship: '(Pohl ex Benth.) Harley & J.F.B.Pastore',
        identifiedBy: 'Silva-Luz, CL',
        yearIdentified: '2015',
        recordedBy: 'Hoehne, W',
        recordNumber: 's.n.',
        year: '1946',
        month: '04',
        day: '03',
        country: 'Brasil',
        stateProvince: 'São Paulo',
        county: 'São Paulo',
        decimalLongitude: '-46.6300010681152',
        decimalLatitude: '-23.5400009155273',
        coordinatePrecision: '53584',
        barcode: 'SPF00013809',
        imagecode: 'SPF00013809',
        geoFlag: 'auto'
        }
    ]
}

async function mockConsultspeciesLink() {
    return data;
}

describe('test mock', () => {
    test('verifica o nome cientifico', async () => {
        const retorno = await mockConsultspeciesLink();  // Run the function
        expect(retorno.result[0].scientificName).toBe('Cantinoa althaeifolia');  // Make an assertion on the result
    });

    test('verifica o local', async () => {
        const retorno = await mockConsultspeciesLink();  // Run the function
        expect(retorno.result[1].county).toBe('Jales');  // Make an assertion on the result
    });

    test('verifica a instituição de coleta', async () => {
        const retorno = await mockConsultspeciesLink();  // Run the function
        expect(retorno.result[2].institutionCode).toBe('USP');  // Make an assertion on the result
    });

    test('verifica o ano identificado', async () => {
        const retorno = await mockConsultspeciesLink();  // Run the function
        expect(retorno.result[3].yearIdentified).toBe('2015');  // Make an assertion on the result
    });
    
    test('verifica o codigo da coleção da coleta', async () => {
        const retorno = await mockConsultspeciesLink();  // Run the function
        expect(retorno.result[4].collectionCode).toBe('SPF');  // Make an assertion on the result
    });
})
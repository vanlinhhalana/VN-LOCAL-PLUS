const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const jsonPath = path.resolve(__dirname, './jsonFiles');
const excelPath = path.resolve(__dirname, './excelFiles');
const DEFAULT_SHEET = 'Sheet1';
const files = fs.readdirSync(excelPath);
const { stringToSlug } = require('./helper');

let provinces,
  districts,
  wards = [];
const generateProvinces = (fileName) => {
  const provinceSheet = XLSX.readFile(path.resolve(excelPath, fileName)).Sheets[
    DEFAULT_SHEET
  ];
  const provincesCode = {}
  provinces = XLSX.utils
    .sheet_to_json(provinceSheet, { raw: true })
    .map((item) =>{
      const info =  {
        code: item['Mã'],
        name: item['Tên'],
        slug: stringToSlug(item['Tên']),
        unit: item['Cấp'],
      }
      provincesCode[item['Mã']] = info
      return info
    })
    .filter((item) => item.code);
  fs.writeFileSync(
    path.resolve(jsonPath, 'provinces.json'),
    JSON.stringify(provinces, null, 2)
  );
  fs.writeFileSync(
    path.resolve(jsonPath, 'provincesCode.json'),
    JSON.stringify(provincesCode, null, 2)
  );
};

const generateDistricts = (fileName) => {
  const districtsSheet = XLSX.readFile(path.resolve(excelPath, fileName))
    .Sheets[DEFAULT_SHEET];
    const districtsCode = {}
  districts = XLSX.utils
    .sheet_to_json(districtsSheet, { raw: true })
    .map((item) => {
      const info = {
        code: item['Mã'],
        name: item['Tên'],
        slug: stringToSlug(item['Tên']),
        unit: item['Cấp'],
        provinceCode: item['Mã TP'],
        provinceName: item['Tỉnh / Thành Phố'],
        fullName: `${item['Tên']}, ${item['Tỉnh / Thành Phố']}`,
      }
      districtsCode[item['Mã']] = info
      return info
    })
    .filter((item) => item.code);
  fs.writeFileSync(
    path.resolve(jsonPath, 'districts.json'),
    JSON.stringify(districts, null, 2)
  );
  fs.writeFileSync(
    path.resolve(jsonPath, 'districtsCode.json'),
    JSON.stringify(districtsCode, null, 2)
  );
};

const generateWards = (fileName) => {
  const wardsSheet = XLSX.readFile(path.resolve(excelPath, fileName)).Sheets[
    DEFAULT_SHEET
  ];
  const wardsCode = {}
  wards = XLSX.utils
    .sheet_to_json(wardsSheet, { raw: true })
    .map((item) => {
      const info ={
        code: item['Mã'],
        name: item['Tên'],
        slug: stringToSlug(item['Tên']) || '',
        unit: item['Cấp'],
        districtCode: item['Mã QH'],
        districtName: item['Quận Huyện'],
        provinceCode: item['Mã TP'],
        provinceName: item['Tỉnh / Thành Phố'],
        fullName: `${item['Tên']}, ${item['Quận Huyện']}, ${item['Tỉnh / Thành Phố']}`,
      }
      wardsCode[item['Mã']] = info
      return info
    })
    .filter((item) => item.code);
  fs.writeFileSync(
    path.resolve(jsonPath, 'wards.json'),
    JSON.stringify(wards, null, 2)
  );
  fs.writeFileSync(
    path.resolve(jsonPath, 'wardsCode.json'),
    JSON.stringify(wardsCode, null, 2)
  );
};

files.forEach((fileName) => {
  if (fileName.includes('tỉnh')) {
    generateProvinces(fileName);
  } else if (fileName.includes('huyện')) {
    generateDistricts(fileName);
  } else if (fileName.includes('xã')) {
    generateWards(fileName);
  }
});

let provincesTree = {};
provinces.forEach((province) => {
  provincesTree[province.code] = districts.filter(
    (item) => item.provinceCode == province.code
  );
});
fs.writeFileSync(
  path.resolve(jsonPath, 'provincesTree.json'),
  JSON.stringify(provincesTree, null, 2)
);

let districtsTree = {};
districts.forEach((district) => {
  districtsTree[district.code] = wards.filter(
    (item) => item.districtCode == district.code
  );
});
fs.writeFileSync(
  path.resolve(jsonPath, 'districtsTree.json'),
  JSON.stringify(districtsTree, null, 2)
);

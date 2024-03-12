const provinces = require("./jsonFiles/provinces");
const districts = require("./jsonFiles/districts");
const wards = require("./jsonFiles/wards");
const provincesCode = require("./jsonFiles/provincesCode");
const districtsCode = require("./jsonFiles/districtsCode");
const wardsCode = require("./jsonFiles/wardsCode");
const provincesTree = require("./jsonFiles/provincesTree");
const districtsTree = require("./jsonFiles/districtsTree");
const {
  searchAndPaginateDistricts,
  searchAndPaginateProvinces,
  searchAndPaginateWards,
} = require("./service");
module.exports = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getProvinceByCode: (code) => provincesCode[code],
  getDistrictByCode: (code) => districtsCode[code],
  getWardByCode: (code) => wardsCode[code],
  getDistrictsByProvinceCode: (provinceCode) => provincesTree[provinceCode],
  getWardsByDistrictCode: (districtCode) => districtsTree[districtCode],
  searchAndPaginateDistricts,
  searchAndPaginateProvinces,
  searchAndPaginateWards,
};

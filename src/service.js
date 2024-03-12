const fs = require("fs-extra");
const { stringToSlug } = require('./helper');
const path = require('path');

/**
 * Searches and paginates districts based on the provided search text.
 * @param {string} searchText The text to search for within the "name" field of districts.
 * @param {number} page The page number to retrieve.
 * @param {number} pageSize The number of districts per page.
 * @returns {Promise<Array<Object>|null>} A promise that resolves with an array of districts matching the search criteria for the specified page,
 * or null if an error occurs.
 */
async function searchAndPaginateDistricts(searchText, page = 1, pageSize = 10) {
  try {

    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, 'jsonFiles', 'districts.json');

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return pageData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

/**
 * Searches and paginates wards based on the provided search text.
 * @param {string} searchText The text to search for within the "name" field of districts.
 * @param {number} page The page number to retrieve.
 * @param {number} pageSize The number of districts per page.
 * @returns {Promise<Array<Object>|null>} A promise that resolves with an array of districts matching the search criteria for the specified page,
 * or null if an error occurs.
 */
async function searchAndPaginateWards(searchText, page = 1, pageSize = 10) {
  try {

    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, 'jsonFiles', 'wards.json');

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return pageData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

/**
 * Searches and paginates provinces based on the provided search text.
 * @param {string} searchText The text to search for within the "name" field of districts.
 * @param {number} page The page number to retrieve.
 * @param {number} pageSize The number of districts per page.
 * @returns {Promise<Array<Object>|null>} A promise that resolves with an array of districts matching the search criteria for the specified page,
 * or null if an error occurs.
 */
async function searchAndPaginateProvinces(searchText, page = 1, pageSize = 10) {
  try {

    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, 'jsonFiles', 'provinces.json');

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return pageData;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

module.exports = { searchAndPaginateDistricts, searchAndPaginateWards, searchAndPaginateProvinces };

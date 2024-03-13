const fs = require("fs-extra");
const { stringToSlug } = require("./helper");
const path = require("path");

/**
 * Search and paginate through a list of Districts.
 *
 * @param {Object} options - Options object.
 * @param {string} [options.searchText] - The text to search for within ward names.
 * @param {number} [options.page] - The page number to retrieve, default value is 1.
 * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
 * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
 * @throws {Error} Throws an error if any occurs during the process.
 */
async function searchAndPaginateDistricts({
  searchText = "",
  page = 1,
  pageSize = 10,
}) {
  try {
    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, "jsonFiles", "districts.json");

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    //total records
    const totalRecords = filteredData?.length;

    let remainingRecords = 0;
    if (totalRecords > 0) {
      remainingRecords =
        totalRecords > pageSize * page
          ? Math.abs(totalRecords - pageSize * page)
          : 0;
    }

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return { data: pageData, remainingRecords };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Search and paginate through a list of wards.
 *
 * @param {Object} options - Options object.
 * @param {string} [options.searchText] - The text to search for within ward names.
 * @param {number} [options.page] - The page number to retrieve, default value is 1.
 * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
 * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
 * @throws {Error} Throws an error if any occurs during the process.
 */
async function searchAndPaginateWards({
  searchText = "xa-tan-minh",
  page = 1,
  pageSize = 20,
}) {
  try {
    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, "jsonFiles", "wards.json");

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    //total records
    const totalRecords = filteredData?.length;

    let remainingRecords = 0;
    if (totalRecords > 0) {
      remainingRecords =
        totalRecords > pageSize * page
          ? Math.abs(totalRecords - pageSize * page)
          : 0;
    }

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return { data: pageData, remainingRecords };
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Search and paginate through a list of Provinces.
 *
 * @param {Object} options - Options object.
 * @param {string} [options.searchText] - The text to search for within ward names.
 * @param {number} [options.page] - The page number to retrieve, default value is 1.
 * @param {number} [options.pageSize] - The number of wards per page, default value is 20.
 * @returns {Promise<{data: Array<Object>, remainingRecords: number}>} An object containing data for the current page and the count of remaining records.
 * @throws {Error} Throws an error if any occurs during the process.
 */
async function searchAndPaginateProvinces({
  searchText = "",
  page = 1,
  pageSize = 20,
}) {
  try {
    // Xây dựng đường dẫn tuyệt đối đến tệp JSON
    const jsonFilePath = path.resolve(__dirname, "jsonFiles", "provinces.json");

    // Read data from the JSON file
    const jsonData = await fs.readJson(jsonFilePath);

    const slugForSearch = stringToSlug(searchText);

    // Filter data based on the "name" field
    const filteredData = jsonData.filter((item) =>
      item.slug.toLowerCase().includes(slugForSearch)
    );

    //total records
    const totalRecords = filteredData?.length;

    let remainingRecords = 0;
    if (totalRecords > 0) {
      remainingRecords =
        totalRecords > pageSize * page
          ? Math.abs(totalRecords - pageSize * page)
          : 0;
    }

    // Calculate the start and end index of the page
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    // Get the data for the current page
    const pageData = filteredData.slice(startIndex, endIndex);

    return { data: pageData, remainingRecords };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  searchAndPaginateDistricts,
  searchAndPaginateWards,
  searchAndPaginateProvinces,
};

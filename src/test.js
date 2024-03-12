const {searchAndPaginateDistricts, searchAndPaginateWards} = require('./index');

(async()=>{
    const rs = await searchAndPaginateWards('ho', 1, 2);
    console.log('🎯 ~ file: test.js:7 ~ rs:', rs)
})()
const {searchAndPaginateDistricts, searchAndPaginateWards} = require('./index');

(async()=>{
    const rs = await searchAndPaginateWards({});
    console.log('🎯 ~ file: test.js:7 ~ rs:', rs)
})()
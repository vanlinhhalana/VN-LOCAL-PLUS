const {searchAndPaginateDistricts, searchAndPaginateWards} = require('./index');

(async()=>{
    const rs = await searchAndPaginateDistricts({});
    console.log('🎯 ~ file: test.js:7 ~ rs:', rs)
})()
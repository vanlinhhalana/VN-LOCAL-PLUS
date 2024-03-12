## Nguồn data vn-local

https://www.gso.gov.vn/phuong-phap-thong-ke/danh-muc/don-vi-hanh-chinh/

## Install

```
$ npm i vn-local-plus
```

## Functions

| Function                                 | Desciption                             |
| ---------------------------------------- | -------------------------------------- |
| getProvinces()                           | Lấy danh sách các tỉnh/thành phố       |
| getProvinceByCode()                      | Lấy thông tin tỉnh/thành phố           |
| getDistricts()                           | Lấy danh sách các huyện/quận           |
| getDistrictByCode()                      | Lấy thông tin huyện/quận               |
| getWards()                               | Lấy danh sách các xã/phường            |
| getWardByCode()                          | Lấy thông tin xã/phường                |
| getDistrictsByProvinceCode(provinceCode) | Lấy danh sách huyện/ quận theo mã tỉnh |
| getWardsByDistrictCode(districtCode)     | Lấy danh sách phường/ xã theo mã huyện |
| searchAndPaginateDistricts(searchString, page, pageSize) | Lấy danh sách theo page|
| searchAndPaginateProvinces(searchString, page, pageSize) | Lấy danh sách theo page|
| searchAndPaginateWards(searchString, page, pageSize) | Lấy danh sách theo page    |

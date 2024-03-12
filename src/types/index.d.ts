// index.d.ts
declare module "vn-local-plus" {
  export function getProvinces(): any[];
  export function getDistricts(): any[];
  export function getWards(): any[];
  export function getProvinceByCode(code: string): any;
  export function getDistrictByCode(code: string): any;
  export function getWardByCode(code: string): any;
  export function getDistrictsByProvinceCode(provinceCode: string): any[];
  export function getWardsByDistrictCode(districtCode: string): any[];
  export function searchAndPaginateDistricts(searchText: string, page: number, pageSize: number): Promise<any[] | null>;
  export function searchAndPaginateProvinces(searchText: string, page: number, pageSize: number): Promise<any[] | null>;
  export function searchAndPaginateWards(searchText: string, page: number, pageSize: number): Promise<any[] | null>;
}

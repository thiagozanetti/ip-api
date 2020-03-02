declare namespace ipApi {
  const SUCCESS = 'success';
  const FAIL = 'fail';

  export type SUCCESS = typeof SUCCESS;
  export type FAIL = typeof FAIL;

  export type JSONLocation = {
    as: string,
    city: string,
    country: string,
    countryCode: string,
    isp: string,
    lat: number,
    lon: number,
    org: string,
    query: string,
    region: string,
    regionName: string,
    status: SUCCESS,
    timezone: string,
    zip: string
  };

  export type FailResponse = {
    message: string,
    query: string,
    status: FAIL
  };
  
  export type XMLLocation = XMLDocument;
  export type CSVLocation = string;
  
  export function asCsv(ip: string): Promise<CSVLocation | FailResponse>;
  export function asJson(ip: string): Promise<JSONLocation | FailResponse>;
  export function asXml(ip: string): Promise<XMLLocation | FailResponse>;
}

export = ipApi;
export as namespace ipApi;
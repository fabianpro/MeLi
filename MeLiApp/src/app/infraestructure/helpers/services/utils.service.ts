export class UtilsService {
	//Transform data JSON to query string
  public static getQueryStringFromJSON(object: any): string {
    if (!object) return '';
    let queryString = Object.keys(object).map(key => object[key] ? key + '=' + object[key] : "").join('&');
    return queryString;
  }
}

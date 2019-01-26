import * as validators from './validators';

/**
 * Request service that can be reused / injected in each component, that will implement http requests.
 *
 * @example implement request service (see request.mock.js for how to add mocking)
 * // This should only be called from within epics in the store (dispatch fetch / query actions)
 * import { Request } from './utils/request/request.js';
 * const request = new Request();
 * request.get('https://fakeendpoint/API/v2/search').then( data => {
 *   console.log(data);
 *  });
 */
class Request {
  /**
   * method for making GET requests
   * @param {string}} url
   * @param {FetchOptions} options
   * @return Promise
   */
  get(url, options) {
    options = this.setDefaultOptions(options);
    options.method = 'GET';
    return this.request(url, options);
  }

  /**
   * method for making POST requests
   * @param {string} url
   * @param {FetchOptions} options
   */
  post(url, options) {
    options = this.setDefaultOptions(options);
    options.method = 'POST';
    return this.request(url, options);
  }

  /**
   * method for making PUT requests
   * @param {string} url
   * @param {FetchOptions} options
   */
  put(url, options) {
    options = this.setDefaultOptions(options);
    options.method = 'PUT';
    return this.request(url, options);
  }

  /**
   * method for making DELETE requests
   * @param {string} url
   * @param {FetchOptions} options
   */
  delete(url, options) {
    options = this.setDefaultOptions(options);
    options.method = 'DELETE';
    return this.request(url, options);
  }

  /**
   * method for making any type of http request
   * @param {string} url
   * @param {FetchOptions} options
   */
  request(url, options) {
    this.validateRequestInputs(url, options);
    options = this.setDefaultOptions(options);
    url = this.addParams(url, options.params);
    /*
		try {
			const data = await axios({
				...options,
				params: undefined,
				url: url
			})
			return data.data;
		} catch(err) {
			return err;
		}
    */
    return this.fetch(url, options);
  }

  async fetch(url, options) {
    try {
      const response = await fetch(url, options);
      const bodyText = await response.text();
      const data = bodyText && bodyText != '' ? JSON.parse(bodyText) : {};
      return this.onSuccess(data);
    } catch (err) {
      return this.onRequestError(err);
    }
  }

  /**
   * createParmString acceps object of params into string
   * @param { {[s: string]: string} } params
   * @returns { string }
   */
  createParamString(params) {
    const paramArray = Object.keys(params).map(k => {
      return `${k}=${params[k]}`;
    });
    return '?' + paramArray.join('&');
  }

  /**
   * Adds object of parameters to the proviced url string
   * @param {string} url
   * @param { {[s: string]: string} } params
   */
  addParams(url, params) {
    if (params) {
      // strip any params already in url
      url = url.split('?')[0];
      // add params
      return `${url}${this.createParamString(params)}`;
    } else {
      return url;
    }
  }

  /**
   * sets the default options send with ALL http requests.
   * @param {Object} options
   */
  setDefaultOptions(options) {
    if (!options) {
      options = {};
    }

    validators.validateObject(options);
    options.headers = this.setDefaultHeaders(options.headers);
    return options;
  }

  setDefaultHeaders(headers) {
    if (!headers) {
      headers = {};
    }
    headers['Content-Type'] = 'application/json; charset=utf-8';
    headers['Accept'] = 'application/json';
    headers['Accept-Language'] = 'en-US,en;q=0.9';
    return headers;
  }

  /**
   * Validates all input data before making a request.
   * @param {*} url
   * @param {*} options
   */
  validateRequestInputs(url, options) {
    if (options) {
      validators.validateObject(options);
    }
    validators.validateString(url);
  }

  /**
   * handle error from http request
   * @param {*} error
   */
  onRequestError(error) {
    return Promise.reject(error);
  }

  /**
   * Successful Response handler
   * @param {*} data
   */
  onSuccess(data) {
    return Promise.resolve(data);
  }
}

export const request = new Request();

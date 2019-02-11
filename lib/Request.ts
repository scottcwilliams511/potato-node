// Lib/Request.ts

import request = require('request');


/**
 * Wrapper class for making Http requests. */
export class Request {

    /**
     * This function makes an http request to a given API endpoint.
     * @param endpoint is the url that we are requesting.
     */
    getData(endpoint: string) {
        return new Promise(function(resolve, reject) {
            request.get(endpoint, function (err: object, res: request.Response, body: object) {
                (err) ? reject(err) : resolve(body);
            });
        });
    }
}

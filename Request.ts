
import request = require('request');
import { Url } from 'url';

export class Request {

    /**
     * This function makes an http request to a given API endpoint
     * @param endpoint is the url that we are requesting
     */
    getData(endpoint: Url) {
        return new Promise(function(resolve, reject) {
            request(endpoint as request.UriOptions, function (error: any, response: any, body: any) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }
}
/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus API
 * Interact with a Cactus deployment through HTTP.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface HealthCheckResponse
 */
export interface HealthCheckResponse {
    /**
     * 
     * @type {boolean}
     * @memberof HealthCheckResponse
     */
    'success'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof HealthCheckResponse
     */
    'createdAt': string;
    /**
     * 
     * @type {MemoryUsage}
     * @memberof HealthCheckResponse
     */
    'memoryUsage': MemoryUsage;
}
/**
 * 
 * @export
 * @interface MemoryUsage
 */
export interface MemoryUsage {
    /**
     * 
     * @type {number}
     * @memberof MemoryUsage
     */
    'rss'?: number;
    /**
     * 
     * @type {number}
     * @memberof MemoryUsage
     */
    'heapTotal'?: number;
    /**
     * 
     * @type {number}
     * @memberof MemoryUsage
     */
    'heapUsed'?: number;
    /**
     * 
     * @type {number}
     * @memberof MemoryUsage
     */
    'external'?: number;
    /**
     * 
     * @type {number}
     * @memberof MemoryUsage
     */
    'arrayBuffers'?: number;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const WatchHealthcheckV1 = {
    Subscribe: 'org.hyperledger.cactus.api.async.besu.WatchHealthcheckV1.Subscribe',
    Next: 'org.hyperledger.cactus.api.async.besu.WatchHealthcheckV1.Next',
    Unsubscribe: 'org.hyperledger.cactus.api.async.besu.WatchHealthcheckV1.Unsubscribe',
    Error: 'org.hyperledger.cactus.api.async.besu.WatchHealthcheckV1.Error',
    Complete: 'org.hyperledger.cactus.api.async.besu.WatchHealthcheckV1.Complete'
} as const;

export type WatchHealthcheckV1 = typeof WatchHealthcheckV1[keyof typeof WatchHealthcheckV1];



/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the current timestamp of the API server as proof of health/liveness
         * @summary Can be used to verify liveness of an API server instance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealthCheckV1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/api-server/healthcheck`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/api-server/get-prometheus-exporter-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the current timestamp of the API server as proof of health/liveness
         * @summary Can be used to verify liveness of an API server instance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHealthCheckV1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthCheckResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHealthCheckV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPrometheusMetricsV1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPrometheusMetricsV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Returns the current timestamp of the API server as proof of health/liveness
         * @summary Can be used to verify liveness of an API server instance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHealthCheckV1(options?: any): AxiosPromise<HealthCheckResponse> {
            return localVarFp.getHealthCheckV1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1(options?: any): AxiosPromise<string> {
            return localVarFp.getPrometheusMetricsV1(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Returns the current timestamp of the API server as proof of health/liveness
     * @summary Can be used to verify liveness of an API server instance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getHealthCheckV1(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getHealthCheckV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the Prometheus Metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPrometheusMetricsV1(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getPrometheusMetricsV1(options).then((request) => request(this.axios, this.basePath));
    }
}



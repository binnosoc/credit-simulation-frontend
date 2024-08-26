/* tslint:disable */
/* eslint-disable */
import { ContentDisposition } from '../models/content-disposition';
import { HttpMethod } from '../models/http-method';
import { HttpRange } from '../models/http-range';
import { HttpStatusCode } from '../models/http-status-code';
import { MediaType } from '../models/media-type';
import { ProblemDetail } from '../models/problem-detail';
export interface ErrorResponse {
  body?: ProblemDetail;
  detailMessageArguments?: Array<{
}>;
  detailMessageCode?: string;
  headers?: {
'empty'?: boolean;
'location'?: string;
'host'?: {
'address'?: {
'hostAddress'?: string;
'address'?: string;
'hostName'?: string;
'linkLocalAddress'?: boolean;
'multicastAddress'?: boolean;
'anyLocalAddress'?: boolean;
'loopbackAddress'?: boolean;
'siteLocalAddress'?: boolean;
'mcglobal'?: boolean;
'mcnodeLocal'?: boolean;
'mclinkLocal'?: boolean;
'mcsiteLocal'?: boolean;
'mcorgLocal'?: boolean;
'canonicalHostName'?: string;
};
'port'?: number;
'unresolved'?: boolean;
'hostName'?: string;
'hostString'?: string;
};
'all'?: {
[key: string]: string;
};
'lastModified'?: number;
'date'?: number;
'contentLength'?: number;
'contentType'?: MediaType;
'origin'?: string;
'connection'?: Array<string>;
'ifModifiedSince'?: number;
'accessControlAllowCredentials'?: boolean;
'accessControlRequestHeaders'?: Array<string>;
'accessControlExposeHeaders'?: Array<string>;
'accessControlRequestMethod'?: HttpMethod;
'accessControlAllowHeaders'?: Array<string>;
'accessControlAllowOrigin'?: string;
'accessControlAllowMethods'?: Array<HttpMethod>;
'range'?: Array<HttpRange>;
'contentDisposition'?: ContentDisposition;
'acceptCharset'?: Array<string>;
'allow'?: Array<HttpMethod>;
'contentLanguage'?: {
'language'?: string;
'displayName'?: string;
'country'?: string;
'variant'?: string;
'script'?: string;
'unicodeLocaleAttributes'?: Array<string>;
'unicodeLocaleKeys'?: Array<string>;
'displayLanguage'?: string;
'displayScript'?: string;
'displayCountry'?: string;
'displayVariant'?: string;
'extensionKeys'?: Array<string>;
'iso3Language'?: string;
'iso3Country'?: string;
};
'accept'?: Array<MediaType>;
'cacheControl'?: string;
'etag'?: string;
'accessControlMaxAge'?: number;
'ifMatch'?: Array<string>;
'vary'?: Array<string>;
'expires'?: number;
'pragma'?: string;
'upgrade'?: string;
'acceptLanguageAsLocales'?: Array<{
'language'?: string;
'displayName'?: string;
'country'?: string;
'variant'?: string;
'script'?: string;
'unicodeLocaleAttributes'?: Array<string>;
'unicodeLocaleKeys'?: Array<string>;
'displayLanguage'?: string;
'displayScript'?: string;
'displayCountry'?: string;
'displayVariant'?: string;
'extensionKeys'?: Array<string>;
'iso3Language'?: string;
'iso3Country'?: string;
}>;
'ifUnmodifiedSince'?: number;
'acceptPatch'?: Array<MediaType>;
'acceptLanguage'?: Array<{
'range'?: string;
'weight'?: number;
}>;
'basicAuth'?: string;
'ifNoneMatch'?: Array<string>;
'bearerAuth'?: string;
[key: string]: Array<string>;
};
  statusCode?: HttpStatusCode;
  titleMessageCode?: string;
  typeMessageCode?: string;
}

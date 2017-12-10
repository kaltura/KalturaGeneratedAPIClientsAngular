
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCEError } from './KalturaCEError';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface StatsReportKceErrorActionArgs  extends KalturaRequestArgs {
    kalturaCEError : KalturaCEError;
}

/**
 * Build request payload for service 'stats' action 'reportKceError'.
 *
 * 
 *
 * Server response type:         KalturaCEError
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class StatsReportKceErrorAction extends KalturaRequest<KalturaCEError> {

    kalturaCEError : KalturaCEError;

    constructor(data : StatsReportKceErrorActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCEError', responseConstructor : KalturaCEError  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'stats' },
				action : { type : 'c', default : 'reportKceError' },
				kalturaCEError : { type : 'o', subTypeConstructor : KalturaCEError, subType : 'KalturaCEError' }
            }
        );
        return result;
    }
}


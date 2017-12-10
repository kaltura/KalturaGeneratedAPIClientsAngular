
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaResponseProfileCacheRecalculateResults } from './KalturaResponseProfileCacheRecalculateResults';

import { KalturaResponseProfileCacheRecalculateOptions } from './KalturaResponseProfileCacheRecalculateOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ResponseProfileRecalculateActionArgs  extends KalturaRequestArgs {
    options : KalturaResponseProfileCacheRecalculateOptions;
}

/**
 * Build request payload for service 'responseProfile' action 'recalculate'.
 *
 * Usage: Recalculate response profile cached objects
 *
 * Server response type:         KalturaResponseProfileCacheRecalculateResults
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ResponseProfileRecalculateAction extends KalturaRequest<KalturaResponseProfileCacheRecalculateResults> {

    options : KalturaResponseProfileCacheRecalculateOptions;

    constructor(data : ResponseProfileRecalculateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaResponseProfileCacheRecalculateResults', responseConstructor : KalturaResponseProfileCacheRecalculateResults  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'responseprofile' },
				action : { type : 'c', default : 'recalculate' },
				options : { type : 'o', subTypeConstructor : KalturaResponseProfileCacheRecalculateOptions, subType : 'KalturaResponseProfileCacheRecalculateOptions' }
            }
        );
        return result;
    }
}


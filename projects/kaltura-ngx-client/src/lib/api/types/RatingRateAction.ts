
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatingRateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/**
 * Build request payload for service 'rating' action 'rate'.
 *
 * 
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class RatingRateAction extends KalturaRequest<number> {

    entryId : string;
	rank : number;

    constructor(data : RatingRateActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'rating_rating' },
				action : { type : 'c', default : 'rate' },
				entryId : { type : 's' },
				rank : { type : 'n' }
            }
        );
        return result;
    }
}


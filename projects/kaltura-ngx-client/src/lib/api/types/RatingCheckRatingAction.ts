
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatingCheckRatingActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'rating' action 'checkRating'.
 *
 * 
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class RatingCheckRatingAction extends KalturaRequest<number> {

    entryId : string;

    constructor(data : RatingCheckRatingActionArgs)
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
				action : { type : 'c', default : 'checkRating' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


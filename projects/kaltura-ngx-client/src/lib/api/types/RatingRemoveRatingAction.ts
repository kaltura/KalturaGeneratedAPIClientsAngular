
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatingRemoveRatingActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'rating' action 'removeRating'.
 *
 * 
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export class RatingRemoveRatingAction extends KalturaRequest<boolean> {

    entryId : string;

    constructor(data : RatingRemoveRatingActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'rating_rating' },
				action : { type : 'c', default : 'removeRating' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


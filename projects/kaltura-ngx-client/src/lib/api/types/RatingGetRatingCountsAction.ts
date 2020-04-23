
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRatingCountListResponse } from './KalturaRatingCountListResponse';

import { KalturaRatingCountFilter } from './KalturaRatingCountFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface RatingGetRatingCountsActionArgs  extends KalturaRequestArgs {
    filter : KalturaRatingCountFilter;
}

/**
 * Build request payload for service 'rating' action 'getRatingCounts'.
 *
 * 
 *
 * Server response type:         KalturaRatingCountListResponse
 * Server failure response type: KalturaAPIException
 */
export class RatingGetRatingCountsAction extends KalturaRequest<KalturaRatingCountListResponse> {

    filter : KalturaRatingCountFilter;

    constructor(data : RatingGetRatingCountsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRatingCountListResponse', responseConstructor : KalturaRatingCountListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'rating_rating' },
				action : { type : 'c', default : 'getRatingCounts' },
				filter : { type : 'o', subTypeConstructor : KalturaRatingCountFilter, subType : 'KalturaRatingCountFilter' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeLikeActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'like' action 'like'.
 *
 * 
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LikeLikeAction extends KalturaRequest<boolean> {

    entryId : string;

    constructor(data : LikeLikeActionArgs)
    {
        super(data, {responseType : 'b', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'like_like' },
				action : { type : 'c', default : 'like' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


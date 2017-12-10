
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LikeCheckLikeExistsActionArgs  extends KalturaRequestArgs {
    entryId : string;
	userId? : string;
}

/**
 * Build request payload for service 'like' action 'checkLikeExists'.
 *
 * 
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class LikeCheckLikeExistsAction extends KalturaRequest<boolean> {

    entryId : string;
	userId : string;

    constructor(data : LikeCheckLikeExistsActionArgs)
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
				action : { type : 'c', default : 'checkLikeExists' },
				entryId : { type : 's' },
				userId : { type : 's' }
            }
        );
        return result;
    }
}


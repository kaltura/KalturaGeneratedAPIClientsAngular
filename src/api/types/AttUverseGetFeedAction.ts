
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface AttUverseGetFeedActionArgs  extends KalturaFileRequestArgs {
    distributionProfileId : number;
	hash : string;
}

/**
 * Build request payload for service 'attUverse' action 'getFeed'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class AttUverseGetFeedAction extends KalturaFileRequest {

    distributionProfileId : number;
	hash : string;

    constructor(data : AttUverseGetFeedActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attuversedistribution_attuverse' },
				action : { type : 'c', default : 'getFeed' },
				distributionProfileId : { type : 'n' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}


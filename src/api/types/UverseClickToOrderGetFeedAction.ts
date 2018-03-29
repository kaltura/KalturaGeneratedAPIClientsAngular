
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface UverseClickToOrderGetFeedActionArgs  extends KalturaFileRequestArgs {
    distributionProfileId : number;
	hash : string;
}

/**
 * Build request payload for service 'uverseClickToOrder' action 'getFeed'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class UverseClickToOrderGetFeedAction extends KalturaFileRequest {

    distributionProfileId : number;
	hash : string;

    constructor(data : UverseClickToOrderGetFeedActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'uverseclicktoorderdistribution_uverseclicktoorder' },
				action : { type : 'c', default : 'getFeed' },
				distributionProfileId : { type : 'n' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}


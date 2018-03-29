
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface NdnGetFeedActionArgs  extends KalturaFileRequestArgs {
    distributionProfileId : number;
	hash : string;
}

/**
 * Build request payload for service 'ndn' action 'getFeed'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class NdnGetFeedAction extends KalturaFileRequest {

    distributionProfileId : number;
	hash : string;

    constructor(data : NdnGetFeedActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'ndndistribution_ndn' },
				action : { type : 'c', default : 'getFeed' },
				distributionProfileId : { type : 'n' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}


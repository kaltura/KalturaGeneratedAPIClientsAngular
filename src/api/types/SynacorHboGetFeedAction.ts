
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface SynacorHboGetFeedActionArgs  extends KalturaFileRequestArgs {
    distributionProfileId : number;
	hash : string;
}

/**
 * Build request payload for service 'synacorHbo' action 'getFeed'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class SynacorHboGetFeedAction extends KalturaFileRequest {

    distributionProfileId : number;
	hash : string;

    constructor(data : SynacorHboGetFeedActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'synacorhbodistribution_synacorhbo' },
				action : { type : 'c', default : 'getFeed' },
				distributionProfileId : { type : 'n' },
				hash : { type : 's' }
            }
        );
        return result;
    }
}


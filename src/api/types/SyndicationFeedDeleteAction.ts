
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedDeleteActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'syndicationFeed' action 'delete'.
 *
 * Usage: Delete Syndication Feed by ID
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SyndicationFeedDeleteAction extends KalturaRequest<void> {

    id : string;

    constructor(data : SyndicationFeedDeleteActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'delete' },
				id : { type : 's' }
            }
        );
        return result;
    }
}


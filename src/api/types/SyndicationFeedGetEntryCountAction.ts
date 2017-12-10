
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSyndicationFeedEntryCount } from './KalturaSyndicationFeedEntryCount';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedGetEntryCountActionArgs  extends KalturaRequestArgs {
    feedId : string;
}

/**
 * Build request payload for service 'syndicationFeed' action 'getEntryCount'.
 *
 * Usage: get entry count for a syndication feed
 *
 * Server response type:         KalturaSyndicationFeedEntryCount
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SyndicationFeedGetEntryCountAction extends KalturaRequest<KalturaSyndicationFeedEntryCount> {

    feedId : string;

    constructor(data : SyndicationFeedGetEntryCountActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaSyndicationFeedEntryCount', responseConstructor : KalturaSyndicationFeedEntryCount  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'getEntryCount' },
				feedId : { type : 's' }
            }
        );
        return result;
    }
}


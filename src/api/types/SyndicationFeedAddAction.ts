
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedAddActionArgs  extends KalturaRequestArgs {
    syndicationFeed : KalturaBaseSyndicationFeed;
}

/**
 * Build request payload for service 'syndicationFeed' action 'add'.
 *
 * Usage: Add new Syndication Feed
 *
 * Server response type:         KalturaBaseSyndicationFeed
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SyndicationFeedAddAction extends KalturaRequest<KalturaBaseSyndicationFeed> {

    syndicationFeed : KalturaBaseSyndicationFeed;

    constructor(data : SyndicationFeedAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseSyndicationFeed', responseConstructor : KalturaBaseSyndicationFeed  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'add' },
				syndicationFeed : { type : 'o', subTypeConstructor : KalturaBaseSyndicationFeed, subType : 'KalturaBaseSyndicationFeed' }
            }
        );
        return result;
    }
}


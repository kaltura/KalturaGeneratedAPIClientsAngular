
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedRequestConversionActionArgs  extends KalturaRequestArgs {
    feedId : string;
}

/**
 * Build request payload for service 'syndicationFeed' action 'requestConversion'.
 *
 * Usage: request conversion for all entries that doesnt have the required flavor param
 * returns a comma-separated ids of conversion jobs
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class SyndicationFeedRequestConversionAction extends KalturaRequest<string> {

    feedId : string;

    constructor(data : SyndicationFeedRequestConversionActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'syndicationfeed' },
				action : { type : 'c', default : 'requestConversion' },
				feedId : { type : 's' }
            }
        );
        return result;
    }
}


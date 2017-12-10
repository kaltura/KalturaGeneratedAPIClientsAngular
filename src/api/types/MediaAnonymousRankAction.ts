
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaAnonymousRankActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/**
 * Build request payload for service 'media' action 'anonymousRank'.
 *
 * Usage: Anonymously rank a media entry, no validation is done on duplicate rankings
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaAnonymousRankAction extends KalturaRequest<void> {

    entryId : string;
	rank : number;

    constructor(data : MediaAnonymousRankActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'anonymousRank' },
				entryId : { type : 's' },
				rank : { type : 'n' }
            }
        );
        return result;
    }
}


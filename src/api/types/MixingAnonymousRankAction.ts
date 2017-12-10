
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingAnonymousRankActionArgs  extends KalturaRequestArgs {
    entryId : string;
	rank : number;
}

/**
 * Build request payload for service 'mixing' action 'anonymousRank'.
 *
 * Usage: Anonymously rank a mix entry, no validation is done on duplicate rankings
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingAnonymousRankAction extends KalturaRequest<void> {

    entryId : string;
	rank : number;

    constructor(data : MixingAnonymousRankActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'anonymousRank' },
				entryId : { type : 's' },
				rank : { type : 'n' }
            }
        );
        return result;
    }
}


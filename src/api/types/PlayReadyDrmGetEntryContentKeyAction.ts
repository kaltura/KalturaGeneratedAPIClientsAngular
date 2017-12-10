
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlayReadyContentKey } from './KalturaPlayReadyContentKey';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlayReadyDrmGetEntryContentKeyActionArgs  extends KalturaRequestArgs {
    entryId : string;
	createIfMissing? : boolean;
}

/**
 * Build request payload for service 'playReadyDrm' action 'getEntryContentKey'.
 *
 * Usage: Get content key and key id for the given entry
 *
 * Server response type:         KalturaPlayReadyContentKey
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class PlayReadyDrmGetEntryContentKeyAction extends KalturaRequest<KalturaPlayReadyContentKey> {

    entryId : string;
	createIfMissing : boolean;

    constructor(data : PlayReadyDrmGetEntryContentKeyActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaPlayReadyContentKey', responseConstructor : KalturaPlayReadyContentKey  });
        if (typeof this.createIfMissing === 'undefined') this.createIfMissing = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'playready_playreadydrm' },
				action : { type : 'c', default : 'getEntryContentKey' },
				entryId : { type : 's' },
				createIfMissing : { type : 'b' }
            }
        );
        return result;
    }
}


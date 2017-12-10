
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingGetReadyMediaEntriesActionArgs  extends KalturaRequestArgs {
    mixId : string;
	version? : number;
}

/**
 * Build request payload for service 'mixing' action 'getReadyMediaEntries'.
 *
 * Usage: Get all ready media entries that exist in the given mix id
 *
 * Server response type:         KalturaMediaEntry[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingGetReadyMediaEntriesAction extends KalturaRequest<KalturaMediaEntry[]> {

    mixId : string;
	version : number;

    constructor(data : MixingGetReadyMediaEntriesActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'getReadyMediaEntries' },
				mixId : { type : 's' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMixEntry } from './KalturaMixEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MixingAppendMediaEntryActionArgs  extends KalturaRequestArgs {
    mixEntryId : string;
	mediaEntryId : string;
}

/**
 * Build request payload for service 'mixing' action 'appendMediaEntry'.
 *
 * Usage: Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version
 *
 * Server response type:         KalturaMixEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MixingAppendMediaEntryAction extends KalturaRequest<KalturaMixEntry> {

    mixEntryId : string;
	mediaEntryId : string;

    constructor(data : MixingAppendMediaEntryActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMixEntry', responseConstructor : KalturaMixEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'mixing' },
				action : { type : 'c', default : 'appendMediaEntry' },
				mixEntryId : { type : 's' },
				mediaEntryId : { type : 's' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaUpdateContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource : KalturaResource;
	conversionProfileId? : number;
	advancedOptions? : KalturaEntryReplacementOptions;
}

/**
 * Build request payload for service 'media' action 'updateContent'.
 *
 * Usage: Replace content associated with the media entry
 *
 * Server response type:         KalturaMediaEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaUpdateContentAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	resource : KalturaResource;
	conversionProfileId : number;
	advancedOptions : KalturaEntryReplacementOptions;

    constructor(data : MediaUpdateContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaMediaEntry', responseConstructor : KalturaMediaEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'updateContent' },
				entryId : { type : 's' },
				resource : { type : 'o', subTypeConstructor : KalturaResource, subType : 'KalturaResource' },
				conversionProfileId : { type : 'n' },
				advancedOptions : { type : 'o', subTypeConstructor : KalturaEntryReplacementOptions, subType : 'KalturaEntryReplacementOptions' }
            }
        );
        return result;
    }
}


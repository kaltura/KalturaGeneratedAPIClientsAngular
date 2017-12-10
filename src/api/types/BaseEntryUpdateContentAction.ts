
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaResource } from './KalturaResource';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryUpdateContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource : KalturaResource;
	conversionProfileId? : number;
	advancedOptions? : KalturaEntryReplacementOptions;
}

/**
 * Build request payload for service 'baseEntry' action 'updateContent'.
 *
 * Usage: Update the content resource associated with the entry
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryUpdateContentAction extends KalturaRequest<KalturaBaseEntry> {

    entryId : string;
	resource : KalturaResource;
	conversionProfileId : number;
	advancedOptions : KalturaEntryReplacementOptions;

    constructor(data : BaseEntryUpdateContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
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


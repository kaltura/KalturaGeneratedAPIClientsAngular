
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaBaseEntry;
	type? : KalturaEntryType;
}

/**
 * Build request payload for service 'baseEntry' action 'add'.
 *
 * Usage: Generic add entry, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryAddAction extends KalturaRequest<KalturaBaseEntry> {

    entry : KalturaBaseEntry;
	type : KalturaEntryType;

    constructor(data : BaseEntryAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entry : { type : 'o', subTypeConstructor : KalturaBaseEntry, subType : 'KalturaBaseEntry' },
				type : { type : 'es', subTypeConstructor : KalturaEntryType, subType : 'KalturaEntryType' }
            }
        );
        return result;
    }
}


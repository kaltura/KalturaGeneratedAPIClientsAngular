
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataUpdateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	documentEntry : KalturaDataEntry;
}

/**
 * Build request payload for service 'data' action 'update'.
 *
 * Usage: Update data entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataUpdateAction extends KalturaRequest<KalturaDataEntry> {

    entryId : string;
	documentEntry : KalturaDataEntry;

    constructor(data : DataUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDataEntry', responseConstructor : KalturaDataEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'data' },
				action : { type : 'c', default : 'update' },
				entryId : { type : 's' },
				documentEntry : { type : 'o', subTypeConstructor : KalturaDataEntry, subType : 'KalturaDataEntry' }
            }
        );
        return result;
    }
}


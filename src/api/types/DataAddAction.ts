
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataAddActionArgs  extends KalturaRequestArgs {
    dataEntry : KalturaDataEntry;
}

/**
 * Build request payload for service 'data' action 'add'.
 *
 * Usage: Adds a new data entry
 *
 * Server response type:         KalturaDataEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DataAddAction extends KalturaRequest<KalturaDataEntry> {

    dataEntry : KalturaDataEntry;

    constructor(data : DataAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				dataEntry : { type : 'o', subTypeConstructor : KalturaDataEntry, subType : 'KalturaDataEntry' }
            }
        );
        return result;
    }
}


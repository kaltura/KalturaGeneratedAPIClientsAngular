
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCategoryEntry } from './KalturaCategoryEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryEntryAddActionArgs  extends KalturaRequestArgs {
    categoryEntry : KalturaCategoryEntry;
}

/**
 * Build request payload for service 'categoryEntry' action 'add'.
 *
 * Usage: Add new CategoryEntry
 *
 * Server response type:         KalturaCategoryEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class CategoryEntryAddAction extends KalturaRequest<KalturaCategoryEntry> {

    categoryEntry : KalturaCategoryEntry;

    constructor(data : CategoryEntryAddActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaCategoryEntry', responseConstructor : KalturaCategoryEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'categoryentry' },
				action : { type : 'c', default : 'add' },
				categoryEntry : { type : 'o', subTypeConstructor : KalturaCategoryEntry, subType : 'KalturaCategoryEntry' }
            }
        );
        return result;
    }
}


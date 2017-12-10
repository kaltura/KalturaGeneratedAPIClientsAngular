
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryGetByIdsActionArgs  extends KalturaRequestArgs {
    entryIds : string;
}

/**
 * Build request payload for service 'baseEntry' action 'getByIds'.
 *
 * Usage: Get an array of KalturaBaseEntry objects by a comma-separated list of ids
 *
 * Server response type:         KalturaBaseEntry[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BaseEntryGetByIdsAction extends KalturaRequest<KalturaBaseEntry[]> {

    entryIds : string;

    constructor(data : BaseEntryGetByIdsActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaBaseEntry', responseConstructor : KalturaBaseEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'getByIds' },
				entryIds : { type : 's' }
            }
        );
        return result;
    }
}


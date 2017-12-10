
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserEntryBulkDeleteActionArgs  extends KalturaRequestArgs {
    filter : KalturaUserEntryFilter;
}

/**
 * Build request payload for service 'userEntry' action 'bulkDelete'.
 *
 * 
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class UserEntryBulkDeleteAction extends KalturaRequest<number> {

    filter : KalturaUserEntryFilter;

    constructor(data : UserEntryBulkDeleteActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'userentry' },
				action : { type : 'c', default : 'bulkDelete' },
				filter : { type : 'o', subTypeConstructor : KalturaUserEntryFilter, subType : 'KalturaUserEntryFilter' }
            }
        );
        return result;
    }
}


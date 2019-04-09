
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

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
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class UserEntryBulkDeleteAction extends KalturaRequest<KalturaBulkUpload> {

    filter : KalturaUserEntryFilter;

    constructor(data : UserEntryBulkDeleteActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
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


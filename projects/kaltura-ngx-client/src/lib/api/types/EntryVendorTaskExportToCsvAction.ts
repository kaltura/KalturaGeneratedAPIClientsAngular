
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEntryVendorTaskFilter } from './KalturaEntryVendorTaskFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryVendorTaskExportToCsvActionArgs  extends KalturaRequestArgs {
    filter : KalturaEntryVendorTaskFilter;
}

/**
 * Build request payload for service 'entryVendorTask' action 'exportToCsv'.
 *
 * Usage: add batch job that sends an email with a link to download an updated CSV that contains list of users
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskExportToCsvAction extends KalturaRequest<string> {

    filter : KalturaEntryVendorTaskFilter;

    constructor(data : EntryVendorTaskExportToCsvActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'exportToCsv' },
				filter : { type : 'o', subTypeConstructor : KalturaEntryVendorTaskFilter, subType : 'KalturaEntryVendorTaskFilter' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface EntryVendorTaskServeActionArgs  extends KalturaFileRequestArgs {
    vendorPartnerId? : number;
	partnerId? : number;
	status? : number;
	dueDate? : string;
}

/**
 * Build request payload for service 'entryVendorTask' action 'serve'.
 *
 * 
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class EntryVendorTaskServeAction extends KalturaFileRequest {

    vendorPartnerId : number;
	partnerId : number;
	status : number;
	dueDate : string;

    constructor(data? : EntryVendorTaskServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'reach_entryvendortask' },
				action : { type : 'c', default : 'serve' },
				vendorPartnerId : { type : 'n' },
				partnerId : { type : 'n' },
				status : { type : 'n' },
				dueDate : { type : 's' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface BulkUploadServeActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulkUpload' action 'serve'.
 *
 * Usage: serve action return the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class BulkUploadServeAction extends KalturaFileRequest {

    id : number;

    constructor(data : BulkUploadServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload' },
				action : { type : 'c', default : 'serve' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}


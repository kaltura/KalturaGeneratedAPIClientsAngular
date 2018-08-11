
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface BulkUploadServeLogActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulkUpload' action 'serveLog'.
 *
 * Usage: serveLog action returan the original file
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class BulkUploadServeLogAction extends KalturaFileRequest {

    id : number;

    constructor(data : BulkUploadServeLogActionArgs)
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
				action : { type : 'c', default : 'serveLog' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}


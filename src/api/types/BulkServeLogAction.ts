
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface BulkServeLogActionArgs  extends KalturaFileRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulk' action 'serveLog'.
 *
 * Usage: serveLog action returns the log file for the bulk-upload job
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class BulkServeLogAction extends KalturaFileRequest {

    id : number;

    constructor(data : BulkServeLogActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload_bulk' },
				action : { type : 'c', default : 'serveLog' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}


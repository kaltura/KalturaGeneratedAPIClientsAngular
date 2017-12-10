
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBulkUpload } from './KalturaBulkUpload';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BulkUploadAbortActionArgs  extends KalturaRequestArgs {
    id : number;
}

/**
 * Build request payload for service 'bulkUpload' action 'abort'.
 *
 * Usage: Aborts the bulk upload and all its child jobs
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BulkUploadAbortAction extends KalturaRequest<KalturaBulkUpload> {

    id : number;

    constructor(data : BulkUploadAbortActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaBulkUpload', responseConstructor : KalturaBulkUpload  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'bulkupload' },
				action : { type : 'c', default : 'abort' },
				id : { type : 'n' }
            }
        );
        return result;
    }
}


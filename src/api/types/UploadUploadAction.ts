
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface UploadUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/**
 * Build request payload for service 'upload' action 'upload'.
 *
 * 
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class UploadUploadAction extends KalturaUploadRequest<string> {

    fileData : File;

    constructor(data : UploadUploadActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'upload' },
				action : { type : 'c', default : 'upload' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface BaseEntryUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/**
 * Build request payload for service 'baseEntry' action 'upload'.
 *
 * Usage: Upload a file to Kaltura, that can be used to create an entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class BaseEntryUploadAction extends KalturaUploadRequest<string> {

    fileData : File;

    constructor(data : BaseEntryUploadActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'baseentry' },
				action : { type : 'c', default : 'upload' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}


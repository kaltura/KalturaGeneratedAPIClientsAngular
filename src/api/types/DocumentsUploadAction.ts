
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface DocumentsUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/**
 * Build request payload for service 'documents' action 'upload'.
 *
 * Usage: Upload a document file to Kaltura, then the file can be used to create a document entry
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class DocumentsUploadAction extends KalturaUploadRequest<string> {

    fileData : File;

    constructor(data : DocumentsUploadActionArgs)
    {
        super(data, {responseType : 's', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'upload' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}


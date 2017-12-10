
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface DocumentsServeActionArgs  extends KalturaFileRequestArgs {
    entryId : string;
	flavorAssetId? : string;
	forceProxy? : boolean;
}

/**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaFileRequest
 */
export class DocumentsServeAction extends KalturaFileRequest {

    entryId : string;
	flavorAssetId : string;
	forceProxy : boolean;

    constructor(data : DocumentsServeActionArgs)
    {
        super(data);
        if (typeof this.forceProxy === 'undefined') this.forceProxy = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'serve' },
				entryId : { type : 's' },
				flavorAssetId : { type : 's' },
				forceProxy : { type : 'b' }
            }
        );
        return result;
    }
}


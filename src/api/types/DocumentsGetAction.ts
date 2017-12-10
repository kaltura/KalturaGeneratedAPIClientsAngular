
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/**
 * Build request payload for service 'documents' action 'get'.
 *
 * Usage: Get document entry by ID
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsGetAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;
	version : number;

    constructor(data : DocumentsGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentEntry', responseConstructor : KalturaDocumentEntry  });
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'get' },
				entryId : { type : 's' },
				version : { type : 'n' }
            }
        );
        return result;
    }
}


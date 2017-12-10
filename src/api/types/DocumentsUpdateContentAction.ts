
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaResource } from './KalturaResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsUpdateContentActionArgs  extends KalturaRequestArgs {
    entryId : string;
	resource : KalturaResource;
	conversionProfileId? : number;
}

/**
 * Build request payload for service 'documents' action 'updateContent'.
 *
 * Usage: Replace content associated with the given document entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsUpdateContentAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;
	resource : KalturaResource;
	conversionProfileId : number;

    constructor(data : DocumentsUpdateContentActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentEntry', responseConstructor : KalturaDocumentEntry  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'updateContent' },
				entryId : { type : 's' },
				resource : { type : 'o', subTypeConstructor : KalturaResource, subType : 'KalturaResource' },
				conversionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}


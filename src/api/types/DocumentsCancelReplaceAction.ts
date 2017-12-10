
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsCancelReplaceActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'documents' action 'cancelReplace'.
 *
 * Usage: Cancels document replacement
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsCancelReplaceAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;

    constructor(data : DocumentsCancelReplaceActionArgs)
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
				action : { type : 'c', default : 'cancelReplace' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


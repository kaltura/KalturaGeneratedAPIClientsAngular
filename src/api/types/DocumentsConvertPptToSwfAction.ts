
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsConvertPptToSwfActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'documents' action 'convertPptToSwf'.
 *
 * Usage: This will queue a batch job for converting the document file to swf
 * Returns the URL where the new swf will be available
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsConvertPptToSwfAction extends KalturaRequest<string> {

    entryId : string;

    constructor(data : DocumentsConvertPptToSwfActionArgs)
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
				action : { type : 'c', default : 'convertPptToSwf' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


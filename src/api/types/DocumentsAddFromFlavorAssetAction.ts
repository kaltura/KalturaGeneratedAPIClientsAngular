
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsAddFromFlavorAssetActionArgs  extends KalturaRequestArgs {
    sourceFlavorAssetId : string;
	documentEntry? : KalturaDocumentEntry;
}

/**
 * Build request payload for service 'documents' action 'addFromFlavorAsset'.
 *
 * Usage: Copy flavor asset into new entry
 *
 * Server response type:         KalturaDocumentEntry
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsAddFromFlavorAssetAction extends KalturaRequest<KalturaDocumentEntry> {

    sourceFlavorAssetId : string;
	documentEntry : KalturaDocumentEntry;

    constructor(data : DocumentsAddFromFlavorAssetActionArgs)
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
				action : { type : 'c', default : 'addFromFlavorAsset' },
				sourceFlavorAssetId : { type : 's' },
				documentEntry : { type : 'o', subTypeConstructor : KalturaDocumentEntry, subType : 'KalturaDocumentEntry' }
            }
        );
        return result;
    }
}


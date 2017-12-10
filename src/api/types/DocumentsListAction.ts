
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentListResponse } from './KalturaDocumentListResponse';

import { KalturaDocumentEntryFilter } from './KalturaDocumentEntryFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDocumentEntryFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'documents' action 'list'.
 *
 * Usage: List document entries by filter with paging support
 *
 * Server response type:         KalturaDocumentListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsListAction extends KalturaRequest<KalturaDocumentListResponse> {

    filter : KalturaDocumentEntryFilter;
	pager : KalturaFilterPager;

    constructor(data? : DocumentsListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaDocumentListResponse', responseConstructor : KalturaDocumentListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaDocumentEntryFilter, subType : 'KalturaDocumentEntryFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAssetListResponse } from './KalturaAttachmentAssetListResponse';

import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaAssetFilter;
	pager? : KalturaFilterPager;
}

/**
 * Build request payload for service 'attachmentAsset' action 'list'.
 *
 * Usage: List attachment Assets by filter and pager
 *
 * Server response type:         KalturaAttachmentAssetListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetListAction extends KalturaRequest<KalturaAttachmentAssetListResponse> {

    filter : KalturaAssetFilter;
	pager : KalturaFilterPager;

    constructor(data? : AttachmentAssetListActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAttachmentAssetListResponse', responseConstructor : KalturaAttachmentAssetListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'list' },
				filter : { type : 'o', subTypeConstructor : KalturaAssetFilter, subType : 'KalturaAssetFilter' },
				pager : { type : 'o', subTypeConstructor : KalturaFilterPager, subType : 'KalturaFilterPager' }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	attachmentAsset : KalturaAttachmentAsset;
}

/**
 * Build request payload for service 'attachmentAsset' action 'update'.
 *
 * Usage: Update attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetUpdateAction extends KalturaRequest<KalturaAttachmentAsset> {

    id : string;
	attachmentAsset : KalturaAttachmentAsset;

    constructor(data : AttachmentAssetUpdateActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaAttachmentAsset', responseConstructor : KalturaAttachmentAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'update' },
				id : { type : 's' },
				attachmentAsset : { type : 'o', subTypeConstructor : KalturaAttachmentAsset, subType : 'KalturaAttachmentAsset' }
            }
        );
        return result;
    }
}


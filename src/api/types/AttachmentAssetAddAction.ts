
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetAddActionArgs  extends KalturaRequestArgs {
    entryId : string;
	attachmentAsset : KalturaAttachmentAsset;
}

/**
 * Build request payload for service 'attachmentAsset' action 'add'.
 *
 * Usage: Add attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetAddAction extends KalturaRequest<KalturaAttachmentAsset> {

    entryId : string;
	attachmentAsset : KalturaAttachmentAsset;

    constructor(data : AttachmentAssetAddActionArgs)
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
				action : { type : 'c', default : 'add' },
				entryId : { type : 's' },
				attachmentAsset : { type : 'o', subTypeConstructor : KalturaAttachmentAsset, subType : 'KalturaAttachmentAsset' }
            }
        );
        return result;
    }
}


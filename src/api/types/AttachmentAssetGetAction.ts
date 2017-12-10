
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetGetActionArgs  extends KalturaRequestArgs {
    attachmentAssetId : string;
}

/**
 * Build request payload for service 'attachmentAsset' action 'get'.
 *
 * 
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetGetAction extends KalturaRequest<KalturaAttachmentAsset> {

    attachmentAssetId : string;

    constructor(data : AttachmentAssetGetActionArgs)
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
				action : { type : 'c', default : 'get' },
				attachmentAssetId : { type : 's' }
            }
        );
        return result;
    }
}


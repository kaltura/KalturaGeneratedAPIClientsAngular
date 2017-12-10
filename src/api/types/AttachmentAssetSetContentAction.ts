
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAttachmentAsset } from './KalturaAttachmentAsset';

import { KalturaContentResource } from './KalturaContentResource';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AttachmentAssetSetContentActionArgs  extends KalturaRequestArgs {
    id : string;
	contentResource : KalturaContentResource;
}

/**
 * Build request payload for service 'attachmentAsset' action 'setContent'.
 *
 * Usage: Update content of attachment asset
 *
 * Server response type:         KalturaAttachmentAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class AttachmentAssetSetContentAction extends KalturaRequest<KalturaAttachmentAsset> {

    id : string;
	contentResource : KalturaContentResource;

    constructor(data : AttachmentAssetSetContentActionArgs)
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
				action : { type : 'c', default : 'setContent' },
				id : { type : 's' },
				contentResource : { type : 'o', subTypeConstructor : KalturaContentResource, subType : 'KalturaContentResource' }
            }
        );
        return result;
    }
}


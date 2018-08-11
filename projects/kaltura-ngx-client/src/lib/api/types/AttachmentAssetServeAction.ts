
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaAttachmentServeOptions } from './KalturaAttachmentServeOptions';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface AttachmentAssetServeActionArgs  extends KalturaFileRequestArgs {
    attachmentAssetId : string;
	serveOptions? : KalturaAttachmentServeOptions;
}

/**
 * Build request payload for service 'attachmentAsset' action 'serve'.
 *
 * Usage: Serves attachment by its id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class AttachmentAssetServeAction extends KalturaFileRequest {

    attachmentAssetId : string;
	serveOptions : KalturaAttachmentServeOptions;

    constructor(data : AttachmentAssetServeActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'attachment_attachmentasset' },
				action : { type : 'c', default : 'serve' },
				attachmentAssetId : { type : 's' },
				serveOptions : { type : 'o', subTypeConstructor : KalturaAttachmentServeOptions, subType : 'KalturaAttachmentServeOptions' }
            }
        );
        return result;
    }
}


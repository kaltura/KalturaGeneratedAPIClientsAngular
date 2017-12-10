
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface ThumbAssetAddFromImageActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}

/**
 * Build request payload for service 'thumbAsset' action 'addFromImage'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaUploadRequest
 */
export class ThumbAssetAddFromImageAction extends KalturaUploadRequest<KalturaThumbAsset> {

    entryId : string;
	fileData : File;

    constructor(data : ThumbAssetAddFromImageActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaThumbAsset', responseConstructor : KalturaThumbAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'addFromImage' },
				entryId : { type : 's' },
				fileData : { type : 'f' }
            }
        );
        return result;
    }
}


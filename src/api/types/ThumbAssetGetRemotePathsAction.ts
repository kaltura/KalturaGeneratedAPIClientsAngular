
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRemotePathListResponse } from './KalturaRemotePathListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetRemotePathsActionArgs  extends KalturaRequestArgs {
    id : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'getRemotePaths'.
 *
 * Usage: Get remote storage existing paths for the asset
 *
 * Server response type:         KalturaRemotePathListResponse
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGetRemotePathsAction extends KalturaRequest<KalturaRemotePathListResponse> {

    id : string;

    constructor(data : ThumbAssetGetRemotePathsActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaRemotePathListResponse', responseConstructor : KalturaRemotePathListResponse  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'getRemotePaths' },
				id : { type : 's' }
            }
        );
        return result;
    }
}


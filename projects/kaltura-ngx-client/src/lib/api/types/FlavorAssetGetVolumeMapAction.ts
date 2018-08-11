
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface FlavorAssetGetVolumeMapActionArgs  extends KalturaFileRequestArgs {
    flavorId : string;
}

/**
 * Build request payload for service 'flavorAsset' action 'getVolumeMap'.
 *
 * Usage: Get volume map by entry id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class FlavorAssetGetVolumeMapAction extends KalturaFileRequest {

    flavorId : string;

    constructor(data : FlavorAssetGetVolumeMapActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'flavorasset' },
				action : { type : 'c', default : 'getVolumeMap' },
				flavorId : { type : 's' }
            }
        );
        return result;
    }
}


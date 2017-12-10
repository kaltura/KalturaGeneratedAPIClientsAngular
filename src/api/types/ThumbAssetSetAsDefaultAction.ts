
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetSetAsDefaultActionArgs  extends KalturaRequestArgs {
    thumbAssetId : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'setAsDefault'.
 *
 * Usage: Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetSetAsDefaultAction extends KalturaRequest<void> {

    thumbAssetId : string;

    constructor(data : ThumbAssetSetAsDefaultActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'setAsDefault' },
				thumbAssetId : { type : 's' }
            }
        );
        return result;
    }
}


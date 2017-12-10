
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGetByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
}

/**
 * Build request payload for service 'thumbAsset' action 'getByEntryId'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGetByEntryIdAction extends KalturaRequest<KalturaThumbAsset[]> {

    entryId : string;

    constructor(data : ThumbAssetGetByEntryIdActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaThumbAsset', responseConstructor : KalturaThumbAsset  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'thumbasset' },
				action : { type : 'c', default : 'getByEntryId' },
				entryId : { type : 's' }
            }
        );
        return result;
    }
}


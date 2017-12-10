
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGenerateByEntryIdActionArgs  extends KalturaRequestArgs {
    entryId : string;
	destThumbParamsId : number;
}

/**
 * Build request payload for service 'thumbAsset' action 'generateByEntryId'.
 *
 * 
 *
 * Server response type:         KalturaThumbAsset
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class ThumbAssetGenerateByEntryIdAction extends KalturaRequest<KalturaThumbAsset> {

    entryId : string;
	destThumbParamsId : number;

    constructor(data : ThumbAssetGenerateByEntryIdActionArgs)
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
				action : { type : 'c', default : 'generateByEntryId' },
				entryId : { type : 's' },
				destThumbParamsId : { type : 'n' }
            }
        );
        return result;
    }
}


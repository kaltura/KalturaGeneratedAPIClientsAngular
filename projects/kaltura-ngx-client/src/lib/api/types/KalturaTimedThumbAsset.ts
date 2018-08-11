
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaThumbAsset, KalturaThumbAssetArgs } from './KalturaThumbAsset';

export interface KalturaTimedThumbAssetArgs  extends KalturaThumbAssetArgs {
    cuePointId? : string;
}


export class KalturaTimedThumbAsset extends KalturaThumbAsset {

    cuePointId : string;

    constructor(data? : KalturaTimedThumbAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimedThumbAsset' },
				cuePointId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaTimedThumbAsset'] = KalturaTimedThumbAsset;
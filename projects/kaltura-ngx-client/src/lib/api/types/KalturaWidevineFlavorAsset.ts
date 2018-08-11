
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFlavorAsset, KalturaFlavorAssetArgs } from './KalturaFlavorAsset';

export interface KalturaWidevineFlavorAssetArgs  extends KalturaFlavorAssetArgs {
    widevineDistributionStartDate? : number;
	widevineDistributionEndDate? : number;
	widevineAssetId? : number;
}


export class KalturaWidevineFlavorAsset extends KalturaFlavorAsset {

    widevineDistributionStartDate : number;
	widevineDistributionEndDate : number;
	widevineAssetId : number;

    constructor(data? : KalturaWidevineFlavorAssetArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorAsset' },
				widevineDistributionStartDate : { type : 'n' },
				widevineDistributionEndDate : { type : 'n' },
				widevineAssetId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorAsset'] = KalturaWidevineFlavorAsset;
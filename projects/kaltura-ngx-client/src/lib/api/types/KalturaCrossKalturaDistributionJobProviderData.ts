
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaCrossKalturaDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    distributedFlavorAssets? : string;
	distributedThumbAssets? : string;
	distributedMetadata? : string;
	distributedCaptionAssets? : string;
	distributedCuePoints? : string;
	distributedThumbCuePoints? : string;
	distributedTimedThumbAssets? : string;
}


export class KalturaCrossKalturaDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    distributedFlavorAssets : string;
	distributedThumbAssets : string;
	distributedMetadata : string;
	distributedCaptionAssets : string;
	distributedCuePoints : string;
	distributedThumbCuePoints : string;
	distributedTimedThumbAssets : string;

    constructor(data? : KalturaCrossKalturaDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCrossKalturaDistributionJobProviderData' },
				distributedFlavorAssets : { type : 's' },
				distributedThumbAssets : { type : 's' },
				distributedMetadata : { type : 's' },
				distributedCaptionAssets : { type : 's' },
				distributedCuePoints : { type : 's' },
				distributedThumbCuePoints : { type : 's' },
				distributedTimedThumbAssets : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCrossKalturaDistributionJobProviderData'] = KalturaCrossKalturaDistributionJobProviderData;
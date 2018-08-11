
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaYahooDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    smallThumbPath? : string;
	largeThumbPath? : string;
	videoAssetFilePath? : string;
}


export class KalturaYahooDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    smallThumbPath : string;
	largeThumbPath : string;
	videoAssetFilePath : string;

    constructor(data? : KalturaYahooDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionJobProviderData' },
				smallThumbPath : { type : 's' },
				largeThumbPath : { type : 's' },
				videoAssetFilePath : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaYahooDistributionJobProviderData'] = KalturaYahooDistributionJobProviderData;
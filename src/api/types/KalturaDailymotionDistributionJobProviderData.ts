
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDailymotionDistributionCaptionInfo } from './KalturaDailymotionDistributionCaptionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaDailymotionDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	accessControlGeoBlockingOperation? : string;
	accessControlGeoBlockingCountryList? : string;
	captionsInfo? : KalturaDailymotionDistributionCaptionInfo[];
}


export class KalturaDailymotionDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	accessControlGeoBlockingOperation : string;
	accessControlGeoBlockingCountryList : string;
	captionsInfo : KalturaDailymotionDistributionCaptionInfo[];

    constructor(data? : KalturaDailymotionDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.captionsInfo === 'undefined') this.captionsInfo = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				accessControlGeoBlockingOperation : { type : 's' },
				accessControlGeoBlockingCountryList : { type : 's' },
				captionsInfo : { type : 'a', subTypeConstructor : KalturaDailymotionDistributionCaptionInfo, subType : 'KalturaDailymotionDistributionCaptionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDailymotionDistributionJobProviderData',KalturaDailymotionDistributionJobProviderData);

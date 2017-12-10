
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFacebookCaptionDistributionInfo } from './KalturaFacebookCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaFacebookDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	captionsInfo? : KalturaFacebookCaptionDistributionInfo[];
}


export class KalturaFacebookDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	captionsInfo : KalturaFacebookCaptionDistributionInfo[];

    constructor(data? : KalturaFacebookDistributionJobProviderDataArgs)
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
                objectType : { type : 'c', default : 'KalturaFacebookDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				captionsInfo : { type : 'a', subTypeConstructor : KalturaFacebookCaptionDistributionInfo, subType : 'KalturaFacebookCaptionDistributionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFacebookDistributionJobProviderData',KalturaFacebookDistributionJobProviderData);

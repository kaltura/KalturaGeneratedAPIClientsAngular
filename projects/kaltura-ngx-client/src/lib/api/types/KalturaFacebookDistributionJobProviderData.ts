
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFacebookCaptionDistributionInfo } from './KalturaFacebookCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaFacebookDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetId? : string;
	captionsInfo? : KalturaFacebookCaptionDistributionInfo[];
}


export class KalturaFacebookDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetId : string;
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
				thumbAssetId : { type : 's' },
				captionsInfo : { type : 'a', subTypeConstructor : KalturaFacebookCaptionDistributionInfo, subType : 'KalturaFacebookCaptionDistributionInfo' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFacebookDistributionJobProviderData'] = KalturaFacebookDistributionJobProviderData;
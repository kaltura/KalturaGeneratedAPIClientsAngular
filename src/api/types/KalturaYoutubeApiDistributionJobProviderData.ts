
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYouTubeApiCaptionDistributionInfo } from './KalturaYouTubeApiCaptionDistributionInfo';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaYoutubeApiDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	captionsInfo? : KalturaYouTubeApiCaptionDistributionInfo[];
}


export class KalturaYoutubeApiDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	captionsInfo : KalturaYouTubeApiCaptionDistributionInfo[];

    constructor(data? : KalturaYoutubeApiDistributionJobProviderDataArgs)
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
                objectType : { type : 'c', default : 'KalturaYoutubeApiDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				captionsInfo : { type : 'a', subTypeConstructor : KalturaYouTubeApiCaptionDistributionInfo, subType : 'KalturaYouTubeApiCaptionDistributionInfo' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionJobProviderData',KalturaYoutubeApiDistributionJobProviderData);

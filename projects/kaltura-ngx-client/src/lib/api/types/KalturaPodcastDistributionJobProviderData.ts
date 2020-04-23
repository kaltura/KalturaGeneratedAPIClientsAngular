
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData, KalturaDistributionJobProviderDataArgs } from './KalturaDistributionJobProviderData';

export interface KalturaPodcastDistributionJobProviderDataArgs  extends KalturaDistributionJobProviderDataArgs {
    xml? : string;
	metadataProfileId? : number;
	distributionProfileId? : number;
}


export class KalturaPodcastDistributionJobProviderData extends KalturaDistributionJobProviderData {

    xml : string;
	metadataProfileId : number;
	distributionProfileId : number;

    constructor(data? : KalturaPodcastDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionJobProviderData' },
				xml : { type : 's' },
				metadataProfileId : { type : 'n' },
				distributionProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPodcastDistributionJobProviderData'] = KalturaPodcastDistributionJobProviderData;
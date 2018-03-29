
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';

export interface KalturaPodcastDistributionProfileArgs  extends KalturaDistributionProfileArgs {
    xsl? : string;
	metadataProfileId? : number;
}


export class KalturaPodcastDistributionProfile extends KalturaDistributionProfile {

    xsl : string;
	readonly feedId : string;
	metadataProfileId : number;

    constructor(data? : KalturaPodcastDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPodcastDistributionProfile' },
				xsl : { type : 's' },
				feedId : { type : 's', readOnly : true },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPodcastDistributionProfile',KalturaPodcastDistributionProfile);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYahooDistributionProcessFeedActionStatus } from './KalturaYahooDistributionProcessFeedActionStatus';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaYahooDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ftpPath? : string;
	ftpUsername? : string;
	ftpPassword? : string;
	ftpHost? : string;
	contactTelephone? : string;
	contactEmail? : string;
	processFeed? : KalturaYahooDistributionProcessFeedActionStatus;
}


export class KalturaYahooDistributionProfile extends KalturaConfigurableDistributionProfile {

    ftpPath : string;
	ftpUsername : string;
	ftpPassword : string;
	ftpHost : string;
	contactTelephone : string;
	contactEmail : string;
	processFeed : KalturaYahooDistributionProcessFeedActionStatus;

    constructor(data? : KalturaYahooDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYahooDistributionProfile' },
				ftpPath : { type : 's' },
				ftpUsername : { type : 's' },
				ftpPassword : { type : 's' },
				ftpHost : { type : 's' },
				contactTelephone : { type : 's' },
				contactEmail : { type : 's' },
				processFeed : { type : 'en', subTypeConstructor : KalturaYahooDistributionProcessFeedActionStatus, subType : 'KalturaYahooDistributionProcessFeedActionStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYahooDistributionProfile',KalturaYahooDistributionProfile);

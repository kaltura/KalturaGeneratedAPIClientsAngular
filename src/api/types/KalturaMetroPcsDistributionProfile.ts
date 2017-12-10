
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaMetroPcsDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ftpHost? : string;
	ftpLogin? : string;
	ftpPass? : string;
	ftpPath? : string;
	providerName? : string;
	providerId? : string;
	copyright? : string;
	entitlements? : string;
	rating? : string;
	itemType? : string;
}


export class KalturaMetroPcsDistributionProfile extends KalturaConfigurableDistributionProfile {

    ftpHost : string;
	ftpLogin : string;
	ftpPass : string;
	ftpPath : string;
	providerName : string;
	providerId : string;
	copyright : string;
	entitlements : string;
	rating : string;
	itemType : string;

    constructor(data? : KalturaMetroPcsDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetroPcsDistributionProfile' },
				ftpHost : { type : 's' },
				ftpLogin : { type : 's' },
				ftpPass : { type : 's' },
				ftpPath : { type : 's' },
				providerName : { type : 's' },
				providerId : { type : 's' },
				copyright : { type : 's' },
				entitlements : { type : 's' },
				rating : { type : 's' },
				itemType : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetroPcsDistributionProfile',KalturaMetroPcsDistributionProfile);

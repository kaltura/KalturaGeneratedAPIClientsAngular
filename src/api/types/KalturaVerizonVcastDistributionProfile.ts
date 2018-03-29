
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaVerizonVcastDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ftpHost? : string;
	ftpLogin? : string;
	ftpPass? : string;
	providerName? : string;
	providerId? : string;
	entitlement? : string;
	priority? : string;
	allowStreaming? : string;
	streamingPriceCode? : string;
	allowDownload? : string;
	downloadPriceCode? : string;
}


export class KalturaVerizonVcastDistributionProfile extends KalturaConfigurableDistributionProfile {

    ftpHost : string;
	ftpLogin : string;
	ftpPass : string;
	providerName : string;
	providerId : string;
	entitlement : string;
	priority : string;
	allowStreaming : string;
	streamingPriceCode : string;
	allowDownload : string;
	downloadPriceCode : string;

    constructor(data? : KalturaVerizonVcastDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVerizonVcastDistributionProfile' },
				ftpHost : { type : 's' },
				ftpLogin : { type : 's' },
				ftpPass : { type : 's' },
				providerName : { type : 's' },
				providerId : { type : 's' },
				entitlement : { type : 's' },
				priority : { type : 's' },
				allowStreaming : { type : 's' },
				streamingPriceCode : { type : 's' },
				allowDownload : { type : 's' },
				downloadPriceCode : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaVerizonVcastDistributionProfile',KalturaVerizonVcastDistributionProfile);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaUnicornDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    username? : string;
	password? : string;
	domainName? : string;
	channelGuid? : string;
	apiHostUrl? : string;
	domainGuid? : string;
	adFreeApplicationGuid? : string;
	remoteAssetParamsId? : number;
	storageProfileId? : string;
}


export class KalturaUnicornDistributionProfile extends KalturaConfigurableDistributionProfile {

    username : string;
	password : string;
	domainName : string;
	channelGuid : string;
	apiHostUrl : string;
	domainGuid : string;
	adFreeApplicationGuid : string;
	remoteAssetParamsId : number;
	storageProfileId : string;

    constructor(data? : KalturaUnicornDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUnicornDistributionProfile' },
				username : { type : 's' },
				password : { type : 's' },
				domainName : { type : 's' },
				channelGuid : { type : 's' },
				apiHostUrl : { type : 's' },
				domainGuid : { type : 's' },
				adFreeApplicationGuid : { type : 's' },
				remoteAssetParamsId : { type : 'n' },
				storageProfileId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUnicornDistributionProfile',KalturaUnicornDistributionProfile);

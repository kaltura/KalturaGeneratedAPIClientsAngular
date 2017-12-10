
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaFacebookDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    apiAuthorizeUrl? : string;
	pageId? : string;
	pageAccessToken? : string;
	userAccessToken? : string;
	state? : string;
	permissions? : string;
	reRequestPermissions? : number;
}


export class KalturaFacebookDistributionProfile extends KalturaConfigurableDistributionProfile {

    apiAuthorizeUrl : string;
	pageId : string;
	pageAccessToken : string;
	userAccessToken : string;
	state : string;
	permissions : string;
	reRequestPermissions : number;

    constructor(data? : KalturaFacebookDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFacebookDistributionProfile' },
				apiAuthorizeUrl : { type : 's' },
				pageId : { type : 's' },
				pageAccessToken : { type : 's' },
				userAccessToken : { type : 's' },
				state : { type : 's' },
				permissions : { type : 's' },
				reRequestPermissions : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFacebookDistributionProfile',KalturaFacebookDistributionProfile);

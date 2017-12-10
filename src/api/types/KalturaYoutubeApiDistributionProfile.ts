
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaYoutubeApiDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    username? : string;
	defaultCategory? : number;
	allowComments? : string;
	allowEmbedding? : string;
	allowRatings? : string;
	allowResponses? : string;
	apiAuthorizeUrl? : string;
	googleClientId? : string;
	googleClientSecret? : string;
	googleTokenData? : string;
	assumeSuccess? : boolean;
	privacyStatus? : string;
}


export class KalturaYoutubeApiDistributionProfile extends KalturaConfigurableDistributionProfile {

    username : string;
	defaultCategory : number;
	allowComments : string;
	allowEmbedding : string;
	allowRatings : string;
	allowResponses : string;
	apiAuthorizeUrl : string;
	googleClientId : string;
	googleClientSecret : string;
	googleTokenData : string;
	assumeSuccess : boolean;
	privacyStatus : string;

    constructor(data? : KalturaYoutubeApiDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYoutubeApiDistributionProfile' },
				username : { type : 's' },
				defaultCategory : { type : 'n' },
				allowComments : { type : 's' },
				allowEmbedding : { type : 's' },
				allowRatings : { type : 's' },
				allowResponses : { type : 's' },
				apiAuthorizeUrl : { type : 's' },
				googleClientId : { type : 's' },
				googleClientSecret : { type : 's' },
				googleTokenData : { type : 's' },
				assumeSuccess : { type : 'b' },
				privacyStatus : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYoutubeApiDistributionProfile',KalturaYoutubeApiDistributionProfile);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaYouTubeDistributionFeedSpecVersion } from './KalturaYouTubeDistributionFeedSpecVersion';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaYouTubeDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    feedSpecVersion? : KalturaYouTubeDistributionFeedSpecVersion;
	username? : string;
	notificationEmail? : string;
	sftpHost? : string;
	sftpPort? : number;
	sftpLogin? : string;
	sftpPublicKey? : string;
	sftpPrivateKey? : string;
	sftpBaseDir? : string;
	ownerName? : string;
	defaultCategory? : string;
	allowComments? : string;
	allowEmbedding? : string;
	allowRatings? : string;
	allowResponses? : string;
	commercialPolicy? : string;
	ugcPolicy? : string;
	target? : string;
	adServerPartnerId? : string;
	enableAdServer? : boolean;
	allowPreRollAds? : boolean;
	allowPostRollAds? : boolean;
	strict? : string;
	overrideManualEdits? : string;
	urgentReference? : string;
	allowSyndication? : string;
	hideViewCount? : string;
	allowAdsenseForVideo? : string;
	allowInvideo? : string;
	allowMidRollAds? : boolean;
	instreamStandard? : string;
	instreamTrueview? : string;
	claimType? : string;
	blockOutsideOwnership? : string;
	captionAutosync? : string;
	deleteReference? : boolean;
	releaseClaims? : boolean;
	apiAuthorizeUrl? : string;
}


export class KalturaYouTubeDistributionProfile extends KalturaConfigurableDistributionProfile {

    feedSpecVersion : KalturaYouTubeDistributionFeedSpecVersion;
	username : string;
	notificationEmail : string;
	sftpHost : string;
	sftpPort : number;
	sftpLogin : string;
	sftpPublicKey : string;
	sftpPrivateKey : string;
	sftpBaseDir : string;
	ownerName : string;
	defaultCategory : string;
	allowComments : string;
	allowEmbedding : string;
	allowRatings : string;
	allowResponses : string;
	commercialPolicy : string;
	ugcPolicy : string;
	target : string;
	adServerPartnerId : string;
	enableAdServer : boolean;
	allowPreRollAds : boolean;
	allowPostRollAds : boolean;
	strict : string;
	overrideManualEdits : string;
	urgentReference : string;
	allowSyndication : string;
	hideViewCount : string;
	allowAdsenseForVideo : string;
	allowInvideo : string;
	allowMidRollAds : boolean;
	instreamStandard : string;
	instreamTrueview : string;
	claimType : string;
	blockOutsideOwnership : string;
	captionAutosync : string;
	deleteReference : boolean;
	releaseClaims : boolean;
	apiAuthorizeUrl : string;

    constructor(data? : KalturaYouTubeDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionProfile' },
				feedSpecVersion : { type : 'es', subTypeConstructor : KalturaYouTubeDistributionFeedSpecVersion, subType : 'KalturaYouTubeDistributionFeedSpecVersion' },
				username : { type : 's' },
				notificationEmail : { type : 's' },
				sftpHost : { type : 's' },
				sftpPort : { type : 'n' },
				sftpLogin : { type : 's' },
				sftpPublicKey : { type : 's' },
				sftpPrivateKey : { type : 's' },
				sftpBaseDir : { type : 's' },
				ownerName : { type : 's' },
				defaultCategory : { type : 's' },
				allowComments : { type : 's' },
				allowEmbedding : { type : 's' },
				allowRatings : { type : 's' },
				allowResponses : { type : 's' },
				commercialPolicy : { type : 's' },
				ugcPolicy : { type : 's' },
				target : { type : 's' },
				adServerPartnerId : { type : 's' },
				enableAdServer : { type : 'b' },
				allowPreRollAds : { type : 'b' },
				allowPostRollAds : { type : 'b' },
				strict : { type : 's' },
				overrideManualEdits : { type : 's' },
				urgentReference : { type : 's' },
				allowSyndication : { type : 's' },
				hideViewCount : { type : 's' },
				allowAdsenseForVideo : { type : 's' },
				allowInvideo : { type : 's' },
				allowMidRollAds : { type : 'b' },
				instreamStandard : { type : 's' },
				instreamTrueview : { type : 's' },
				claimType : { type : 's' },
				blockOutsideOwnership : { type : 's' },
				captionAutosync : { type : 's' },
				deleteReference : { type : 'b' },
				releaseClaims : { type : 'b' },
				apiAuthorizeUrl : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeDistributionProfile',KalturaYouTubeDistributionProfile);

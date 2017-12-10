
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaQuickPlayDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    sftpHost? : string;
	sftpLogin? : string;
	sftpPass? : string;
	sftpBasePath? : string;
	channelTitle? : string;
	channelLink? : string;
	channelDescription? : string;
	channelManagingEditor? : string;
	channelLanguage? : string;
	channelImageTitle? : string;
	channelImageWidth? : string;
	channelImageHeight? : string;
	channelImageLink? : string;
	channelImageUrl? : string;
	channelCopyright? : string;
	channelGenerator? : string;
	channelRating? : string;
}


export class KalturaQuickPlayDistributionProfile extends KalturaConfigurableDistributionProfile {

    sftpHost : string;
	sftpLogin : string;
	sftpPass : string;
	sftpBasePath : string;
	channelTitle : string;
	channelLink : string;
	channelDescription : string;
	channelManagingEditor : string;
	channelLanguage : string;
	channelImageTitle : string;
	channelImageWidth : string;
	channelImageHeight : string;
	channelImageLink : string;
	channelImageUrl : string;
	channelCopyright : string;
	channelGenerator : string;
	channelRating : string;

    constructor(data? : KalturaQuickPlayDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuickPlayDistributionProfile' },
				sftpHost : { type : 's' },
				sftpLogin : { type : 's' },
				sftpPass : { type : 's' },
				sftpBasePath : { type : 's' },
				channelTitle : { type : 's' },
				channelLink : { type : 's' },
				channelDescription : { type : 's' },
				channelManagingEditor : { type : 's' },
				channelLanguage : { type : 's' },
				channelImageTitle : { type : 's' },
				channelImageWidth : { type : 's' },
				channelImageHeight : { type : 's' },
				channelImageLink : { type : 's' },
				channelImageUrl : { type : 's' },
				channelCopyright : { type : 's' },
				channelGenerator : { type : 's' },
				channelRating : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuickPlayDistributionProfile',KalturaQuickPlayDistributionProfile);

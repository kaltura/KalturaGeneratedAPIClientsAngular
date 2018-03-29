
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaUverseDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    channelTitle? : string;
	channelLink? : string;
	channelDescription? : string;
	channelLanguage? : string;
	channelCopyright? : string;
	channelImageTitle? : string;
	channelImageUrl? : string;
	channelImageLink? : string;
	ftpHost? : string;
	ftpLogin? : string;
	ftpPassword? : string;
}


export class KalturaUverseDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	channelTitle : string;
	channelLink : string;
	channelDescription : string;
	channelLanguage : string;
	channelCopyright : string;
	channelImageTitle : string;
	channelImageUrl : string;
	channelImageLink : string;
	ftpHost : string;
	ftpLogin : string;
	ftpPassword : string;

    constructor(data? : KalturaUverseDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				channelTitle : { type : 's' },
				channelLink : { type : 's' },
				channelDescription : { type : 's' },
				channelLanguage : { type : 's' },
				channelCopyright : { type : 's' },
				channelImageTitle : { type : 's' },
				channelImageUrl : { type : 's' },
				channelImageLink : { type : 's' },
				ftpHost : { type : 's' },
				ftpLogin : { type : 's' },
				ftpPassword : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseDistributionProfile',KalturaUverseDistributionProfile);

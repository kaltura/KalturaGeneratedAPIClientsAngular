
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaNdnDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    channelTitle? : string;
	channelLink? : string;
	channelDescription? : string;
	channelLanguage? : string;
	channelCopyright? : string;
	channelImageTitle? : string;
	channelImageUrl? : string;
	channelImageLink? : string;
	itemMediaRating? : string;
}


export class KalturaNdnDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	channelTitle : string;
	channelLink : string;
	channelDescription : string;
	channelLanguage : string;
	channelCopyright : string;
	channelImageTitle : string;
	channelImageUrl : string;
	channelImageLink : string;
	itemMediaRating : string;

    constructor(data? : KalturaNdnDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaNdnDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				channelTitle : { type : 's' },
				channelLink : { type : 's' },
				channelDescription : { type : 's' },
				channelLanguage : { type : 's' },
				channelCopyright : { type : 's' },
				channelImageTitle : { type : 's' },
				channelImageUrl : { type : 's' },
				channelImageLink : { type : 's' },
				itemMediaRating : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaNdnDistributionProfile',KalturaNdnDistributionProfile);

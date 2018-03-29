
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaTVComDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    metadataProfileId? : number;
	feedTitle? : string;
	feedLink? : string;
	feedDescription? : string;
	feedLanguage? : string;
	feedCopyright? : string;
	feedImageTitle? : string;
	feedImageUrl? : string;
	feedImageLink? : string;
	feedImageWidth? : number;
	feedImageHeight? : number;
}


export class KalturaTVComDistributionProfile extends KalturaConfigurableDistributionProfile {

    metadataProfileId : number;
	readonly feedUrl : string;
	feedTitle : string;
	feedLink : string;
	feedDescription : string;
	feedLanguage : string;
	feedCopyright : string;
	feedImageTitle : string;
	feedImageUrl : string;
	feedImageLink : string;
	feedImageWidth : number;
	feedImageHeight : number;

    constructor(data? : KalturaTVComDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTVComDistributionProfile' },
				metadataProfileId : { type : 'n' },
				feedUrl : { type : 's', readOnly : true },
				feedTitle : { type : 's' },
				feedLink : { type : 's' },
				feedDescription : { type : 's' },
				feedLanguage : { type : 's' },
				feedCopyright : { type : 's' },
				feedImageTitle : { type : 's' },
				feedImageUrl : { type : 's' },
				feedImageLink : { type : 's' },
				feedImageWidth : { type : 'n' },
				feedImageHeight : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTVComDistributionProfile',KalturaTVComDistributionProfile);

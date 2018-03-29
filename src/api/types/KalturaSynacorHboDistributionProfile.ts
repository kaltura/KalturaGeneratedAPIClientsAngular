
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaSynacorHboDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    feedTitle? : string;
	feedSubtitle? : string;
	feedLink? : string;
	feedAuthorName? : string;
}


export class KalturaSynacorHboDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	feedTitle : string;
	feedSubtitle : string;
	feedLink : string;
	feedAuthorName : string;

    constructor(data? : KalturaSynacorHboDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSynacorHboDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				feedTitle : { type : 's' },
				feedSubtitle : { type : 's' },
				feedLink : { type : 's' },
				feedAuthorName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSynacorHboDistributionProfile',KalturaSynacorHboDistributionProfile);

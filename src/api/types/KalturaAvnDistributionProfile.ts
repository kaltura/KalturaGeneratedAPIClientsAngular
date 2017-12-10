
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaAvnDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    feedTitle? : string;
}


export class KalturaAvnDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	feedTitle : string;

    constructor(data? : KalturaAvnDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAvnDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				feedTitle : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAvnDistributionProfile',KalturaAvnDistributionProfile);

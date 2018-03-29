
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaTimeWarnerDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    
}


export class KalturaTimeWarnerDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;

    constructor(data? : KalturaTimeWarnerDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTimeWarnerDistributionProfile' },
				feedUrl : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTimeWarnerDistributionProfile',KalturaTimeWarnerDistributionProfile);

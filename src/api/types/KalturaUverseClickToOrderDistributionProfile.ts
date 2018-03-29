
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaUverseClickToOrderDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    backgroundImageWide? : string;
	backgroundImageStandard? : string;
}


export class KalturaUverseClickToOrderDistributionProfile extends KalturaConfigurableDistributionProfile {

    readonly feedUrl : string;
	backgroundImageWide : string;
	backgroundImageStandard : string;

    constructor(data? : KalturaUverseClickToOrderDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUverseClickToOrderDistributionProfile' },
				feedUrl : { type : 's', readOnly : true },
				backgroundImageWide : { type : 's' },
				backgroundImageStandard : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUverseClickToOrderDistributionProfile',KalturaUverseClickToOrderDistributionProfile);

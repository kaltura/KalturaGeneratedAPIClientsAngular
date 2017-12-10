
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDailymotionGeoBlockingMapping } from './KalturaDailymotionGeoBlockingMapping';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaDailymotionDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    user? : string;
	password? : string;
	geoBlockingMapping? : KalturaDailymotionGeoBlockingMapping;
}


export class KalturaDailymotionDistributionProfile extends KalturaConfigurableDistributionProfile {

    user : string;
	password : string;
	geoBlockingMapping : KalturaDailymotionGeoBlockingMapping;

    constructor(data? : KalturaDailymotionDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionProfile' },
				user : { type : 's' },
				password : { type : 's' },
				geoBlockingMapping : { type : 'en', subTypeConstructor : KalturaDailymotionGeoBlockingMapping, subType : 'KalturaDailymotionGeoBlockingMapping' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDailymotionDistributionProfile',KalturaDailymotionDistributionProfile);

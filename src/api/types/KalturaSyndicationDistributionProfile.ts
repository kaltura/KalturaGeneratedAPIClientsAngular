
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';

export interface KalturaSyndicationDistributionProfileArgs  extends KalturaDistributionProfileArgs {
    xsl? : string;
}


export class KalturaSyndicationDistributionProfile extends KalturaDistributionProfile {

    xsl : string;
	readonly feedId : string;

    constructor(data? : KalturaSyndicationDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSyndicationDistributionProfile' },
				xsl : { type : 's' },
				feedId : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSyndicationDistributionProfile',KalturaSyndicationDistributionProfile);

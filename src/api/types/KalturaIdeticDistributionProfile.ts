
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaIdeticDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ftpPath? : string;
	username? : string;
	password? : string;
	domain? : string;
}


export class KalturaIdeticDistributionProfile extends KalturaConfigurableDistributionProfile {

    ftpPath : string;
	username : string;
	password : string;
	domain : string;

    constructor(data? : KalturaIdeticDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIdeticDistributionProfile' },
				ftpPath : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				domain : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIdeticDistributionProfile',KalturaIdeticDistributionProfile);

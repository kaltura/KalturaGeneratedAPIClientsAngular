
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';

export interface KalturaFreewheelDistributionProfileArgs  extends KalturaDistributionProfileArgs {
    apikey? : string;
	email? : string;
	sftpPass? : string;
	sftpLogin? : string;
	accountId? : string;
	metadataProfileId? : number;
}


export class KalturaFreewheelDistributionProfile extends KalturaDistributionProfile {

    apikey : string;
	email : string;
	sftpPass : string;
	sftpLogin : string;
	accountId : string;
	metadataProfileId : number;

    constructor(data? : KalturaFreewheelDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelDistributionProfile' },
				apikey : { type : 's' },
				email : { type : 's' },
				sftpPass : { type : 's' },
				sftpLogin : { type : 's' },
				accountId : { type : 's' },
				metadataProfileId : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelDistributionProfile',KalturaFreewheelDistributionProfile);

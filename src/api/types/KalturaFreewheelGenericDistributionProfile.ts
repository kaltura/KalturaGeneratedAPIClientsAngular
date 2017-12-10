
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaFreewheelGenericDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    apikey? : string;
	email? : string;
	sftpPass? : string;
	sftpLogin? : string;
	contentOwner? : string;
	upstreamVideoId? : string;
	upstreamNetworkName? : string;
	upstreamNetworkId? : string;
	categoryId? : string;
	replaceGroup? : boolean;
	replaceAirDates? : boolean;
}


export class KalturaFreewheelGenericDistributionProfile extends KalturaConfigurableDistributionProfile {

    apikey : string;
	email : string;
	sftpPass : string;
	sftpLogin : string;
	contentOwner : string;
	upstreamVideoId : string;
	upstreamNetworkName : string;
	upstreamNetworkId : string;
	categoryId : string;
	replaceGroup : boolean;
	replaceAirDates : boolean;

    constructor(data? : KalturaFreewheelGenericDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelGenericDistributionProfile' },
				apikey : { type : 's' },
				email : { type : 's' },
				sftpPass : { type : 's' },
				sftpLogin : { type : 's' },
				contentOwner : { type : 's' },
				upstreamVideoId : { type : 's' },
				upstreamNetworkName : { type : 's' },
				upstreamNetworkId : { type : 's' },
				categoryId : { type : 's' },
				replaceGroup : { type : 'b' },
				replaceAirDates : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelGenericDistributionProfile',KalturaFreewheelGenericDistributionProfile);

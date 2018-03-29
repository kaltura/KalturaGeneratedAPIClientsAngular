
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaPushToNewsDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    protocol? : KalturaDistributionProtocol;
	host? : string;
	ips? : string;
	port? : number;
	basePath? : string;
	username? : string;
	password? : string;
	certificateKey? : string;
	bodyXslt? : string;
	recentNewsTimeInterval? : number;
}


export class KalturaPushToNewsDistributionProfile extends KalturaConfigurableDistributionProfile {

    protocol : KalturaDistributionProtocol;
	host : string;
	ips : string;
	port : number;
	basePath : string;
	username : string;
	password : string;
	certificateKey : string;
	bodyXslt : string;
	recentNewsTimeInterval : number;

    constructor(data? : KalturaPushToNewsDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushToNewsDistributionProfile' },
				protocol : { type : 'en', subTypeConstructor : KalturaDistributionProtocol, subType : 'KalturaDistributionProtocol' },
				host : { type : 's' },
				ips : { type : 's' },
				port : { type : 'n' },
				basePath : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				certificateKey : { type : 's' },
				bodyXslt : { type : 's' },
				recentNewsTimeInterval : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushToNewsDistributionProfile',KalturaPushToNewsDistributionProfile);

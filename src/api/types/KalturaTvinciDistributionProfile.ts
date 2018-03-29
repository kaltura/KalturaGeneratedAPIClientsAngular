
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTvinciDistributionTag } from './KalturaTvinciDistributionTag';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaTvinciDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    ingestUrl? : string;
	username? : string;
	password? : string;
	tags? : KalturaTvinciDistributionTag[];
	xsltFile? : string;
}


export class KalturaTvinciDistributionProfile extends KalturaConfigurableDistributionProfile {

    ingestUrl : string;
	username : string;
	password : string;
	tags : KalturaTvinciDistributionTag[];
	xsltFile : string;

    constructor(data? : KalturaTvinciDistributionProfileArgs)
    {
        super(data);
        if (typeof this.tags === 'undefined') this.tags = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaTvinciDistributionProfile' },
				ingestUrl : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				tags : { type : 'a', subTypeConstructor : KalturaTvinciDistributionTag, subType : 'KalturaTvinciDistributionTag' },
				xsltFile : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTvinciDistributionProfile',KalturaTvinciDistributionProfile);

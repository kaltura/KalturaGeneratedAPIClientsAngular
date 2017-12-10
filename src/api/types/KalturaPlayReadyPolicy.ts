
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyLicenseRemovalPolicy } from './KalturaPlayReadyLicenseRemovalPolicy';
import { KalturaPlayReadyMinimumLicenseSecurityLevel } from './KalturaPlayReadyMinimumLicenseSecurityLevel';
import { KalturaPlayReadyRight } from './KalturaPlayReadyRight';
import { KalturaDrmPolicy, KalturaDrmPolicyArgs } from './KalturaDrmPolicy';

export interface KalturaPlayReadyPolicyArgs  extends KalturaDrmPolicyArgs {
    gracePeriod? : number;
	licenseRemovalPolicy? : KalturaPlayReadyLicenseRemovalPolicy;
	licenseRemovalDuration? : number;
	minSecurityLevel? : KalturaPlayReadyMinimumLicenseSecurityLevel;
	rights? : KalturaPlayReadyRight[];
}


export class KalturaPlayReadyPolicy extends KalturaDrmPolicy {

    gracePeriod : number;
	licenseRemovalPolicy : KalturaPlayReadyLicenseRemovalPolicy;
	licenseRemovalDuration : number;
	minSecurityLevel : KalturaPlayReadyMinimumLicenseSecurityLevel;
	rights : KalturaPlayReadyRight[];

    constructor(data? : KalturaPlayReadyPolicyArgs)
    {
        super(data);
        if (typeof this.rights === 'undefined') this.rights = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyPolicy' },
				gracePeriod : { type : 'n' },
				licenseRemovalPolicy : { type : 'en', subTypeConstructor : KalturaPlayReadyLicenseRemovalPolicy, subType : 'KalturaPlayReadyLicenseRemovalPolicy' },
				licenseRemovalDuration : { type : 'n' },
				minSecurityLevel : { type : 'en', subTypeConstructor : KalturaPlayReadyMinimumLicenseSecurityLevel, subType : 'KalturaPlayReadyMinimumLicenseSecurityLevel' },
				rights : { type : 'a', subTypeConstructor : KalturaPlayReadyRight, subType : 'KalturaPlayReadyRight' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyPolicy',KalturaPlayReadyPolicy);

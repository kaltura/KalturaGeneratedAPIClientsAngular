
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyPolicy } from './KalturaPlayReadyPolicy';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyLicenseDetailsArgs  extends KalturaObjectBaseArgs {
    policy? : KalturaPlayReadyPolicy;
	beginDate? : number;
	expirationDate? : number;
	removalDate? : number;
}


export class KalturaPlayReadyLicenseDetails extends KalturaObjectBase {

    policy : KalturaPlayReadyPolicy;
	beginDate : number;
	expirationDate : number;
	removalDate : number;

    constructor(data? : KalturaPlayReadyLicenseDetailsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyLicenseDetails' },
				policy : { type : 'o', subTypeConstructor : KalturaPlayReadyPolicy, subType : 'KalturaPlayReadyPolicy' },
				beginDate : { type : 'n' },
				expirationDate : { type : 'n' },
				removalDate : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyLicenseDetails',KalturaPlayReadyLicenseDetails);

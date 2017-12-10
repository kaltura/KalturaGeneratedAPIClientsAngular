
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaDrmProfileStatus } from './KalturaDrmProfileStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDrmProfileArgs  extends KalturaObjectBaseArgs {
    partnerId? : number;
	name? : string;
	description? : string;
	provider? : KalturaDrmProviderType;
	status? : KalturaDrmProfileStatus;
	licenseServerUrl? : string;
	defaultPolicy? : string;
	signingKey? : string;
}


export class KalturaDrmProfile extends KalturaObjectBase {

    readonly id : number;
	partnerId : number;
	name : string;
	description : string;
	provider : KalturaDrmProviderType;
	status : KalturaDrmProfileStatus;
	licenseServerUrl : string;
	defaultPolicy : string;
	readonly createdAt : number;
	readonly updatedAt : number;
	signingKey : string;

    constructor(data? : KalturaDrmProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDrmProfile' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n' },
				name : { type : 's' },
				description : { type : 's' },
				provider : { type : 'es', subTypeConstructor : KalturaDrmProviderType, subType : 'KalturaDrmProviderType' },
				status : { type : 'en', subTypeConstructor : KalturaDrmProfileStatus, subType : 'KalturaDrmProfileStatus' },
				licenseServerUrl : { type : 's' },
				defaultPolicy : { type : 's' },
				createdAt : { type : 'n', readOnly : true },
				updatedAt : { type : 'n', readOnly : true },
				signingKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmProfile',KalturaDrmProfile);

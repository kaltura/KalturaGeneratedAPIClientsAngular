
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfileStatus } from './KalturaResponseProfileStatus';
import { KalturaDetachedResponseProfile, KalturaDetachedResponseProfileArgs } from './KalturaDetachedResponseProfile';

export interface KalturaResponseProfileArgs  extends KalturaDetachedResponseProfileArgs {
    systemName? : string;
}


export class KalturaResponseProfile extends KalturaDetachedResponseProfile {

    readonly id : number;
	systemName : string;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	readonly status : KalturaResponseProfileStatus;
	readonly version : number;

    constructor(data? : KalturaResponseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResponseProfile' },
				id : { type : 'n', readOnly : true },
				systemName : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaResponseProfileStatus, subType : 'KalturaResponseProfileStatus' },
				version : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaResponseProfile',KalturaResponseProfile);

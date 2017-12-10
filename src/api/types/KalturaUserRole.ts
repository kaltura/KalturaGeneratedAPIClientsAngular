
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserRoleStatus } from './KalturaUserRoleStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaUserRoleArgs  extends KalturaObjectBaseArgs {
    name? : string;
	systemName? : string;
	description? : string;
	status? : KalturaUserRoleStatus;
	permissionNames? : string;
	tags? : string;
}


export class KalturaUserRole extends KalturaObjectBase {

    readonly id : number;
	name : string;
	systemName : string;
	description : string;
	status : KalturaUserRoleStatus;
	readonly partnerId : number;
	permissionNames : string;
	tags : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaUserRoleArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserRole' },
				id : { type : 'n', readOnly : true },
				name : { type : 's' },
				systemName : { type : 's' },
				description : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaUserRoleStatus, subType : 'KalturaUserRoleStatus' },
				partnerId : { type : 'n', readOnly : true },
				permissionNames : { type : 's' },
				tags : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserRole',KalturaUserRole);

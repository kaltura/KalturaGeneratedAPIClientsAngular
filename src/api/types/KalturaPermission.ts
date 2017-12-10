
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPermissionType } from './KalturaPermissionType';
import { KalturaPermissionStatus } from './KalturaPermissionStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPermissionArgs  extends KalturaObjectBaseArgs {
    name? : string;
	friendlyName? : string;
	description? : string;
	status? : KalturaPermissionStatus;
	dependsOnPermissionNames? : string;
	tags? : string;
	permissionItemsIds? : string;
	partnerGroup? : string;
}


export class KalturaPermission extends KalturaObjectBase {

    readonly id : number;
	readonly type : KalturaPermissionType;
	name : string;
	friendlyName : string;
	description : string;
	status : KalturaPermissionStatus;
	readonly partnerId : number;
	dependsOnPermissionNames : string;
	tags : string;
	permissionItemsIds : string;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	partnerGroup : string;

    constructor(data? : KalturaPermissionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermission' },
				id : { type : 'n', readOnly : true },
				type : { type : 'en', readOnly : true, subTypeConstructor : KalturaPermissionType, subType : 'KalturaPermissionType' },
				name : { type : 's' },
				friendlyName : { type : 's' },
				description : { type : 's' },
				status : { type : 'en', subTypeConstructor : KalturaPermissionStatus, subType : 'KalturaPermissionStatus' },
				partnerId : { type : 'n', readOnly : true },
				dependsOnPermissionNames : { type : 's' },
				tags : { type : 's' },
				permissionItemsIds : { type : 's' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				partnerGroup : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPermission',KalturaPermission);

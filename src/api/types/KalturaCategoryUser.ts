
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCategoryUserArgs  extends KalturaObjectBaseArgs {
    categoryId? : number;
	userId? : string;
	permissionLevel? : KalturaCategoryUserPermissionLevel;
	updateMethod? : KalturaUpdateMethodType;
	permissionNames? : string;
}


export class KalturaCategoryUser extends KalturaObjectBase {

    categoryId : number;
	userId : string;
	readonly partnerId : number;
	permissionLevel : KalturaCategoryUserPermissionLevel;
	readonly status : KalturaCategoryUserStatus;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	updateMethod : KalturaUpdateMethodType;
	readonly categoryFullIds : string;
	permissionNames : string;

    constructor(data? : KalturaCategoryUserArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryUser' },
				categoryId : { type : 'n' },
				userId : { type : 's' },
				partnerId : { type : 'n', readOnly : true },
				permissionLevel : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaCategoryUserStatus, subType : 'KalturaCategoryUserStatus' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				updateMethod : { type : 'en', subTypeConstructor : KalturaUpdateMethodType, subType : 'KalturaUpdateMethodType' },
				categoryFullIds : { type : 's', readOnly : true },
				permissionNames : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryUser',KalturaCategoryUser);

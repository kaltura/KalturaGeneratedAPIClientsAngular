
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaCategoryUserStatus } from './KalturaCategoryUserStatus';
import { KalturaUpdateMethodType } from './KalturaUpdateMethodType';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';

export interface KalturaCategoryUserBaseFilterArgs  extends KalturaRelatedFilterArgs {
    categoryIdEqual? : number;
	categoryIdIn? : string;
	userIdEqual? : string;
	userIdIn? : string;
	permissionLevelEqual? : KalturaCategoryUserPermissionLevel;
	permissionLevelIn? : string;
	statusEqual? : KalturaCategoryUserStatus;
	statusIn? : string;
	createdAtGreaterThanOrEqual? : Date;
	createdAtLessThanOrEqual? : Date;
	updatedAtGreaterThanOrEqual? : Date;
	updatedAtLessThanOrEqual? : Date;
	updateMethodEqual? : KalturaUpdateMethodType;
	updateMethodIn? : string;
	categoryFullIdsStartsWith? : string;
	categoryFullIdsEqual? : string;
	permissionNamesMatchAnd? : string;
	permissionNamesMatchOr? : string;
	permissionNamesNotContains? : string;
}


export class KalturaCategoryUserBaseFilter extends KalturaRelatedFilter {

    categoryIdEqual : number;
	categoryIdIn : string;
	userIdEqual : string;
	userIdIn : string;
	permissionLevelEqual : KalturaCategoryUserPermissionLevel;
	permissionLevelIn : string;
	statusEqual : KalturaCategoryUserStatus;
	statusIn : string;
	createdAtGreaterThanOrEqual : Date;
	createdAtLessThanOrEqual : Date;
	updatedAtGreaterThanOrEqual : Date;
	updatedAtLessThanOrEqual : Date;
	updateMethodEqual : KalturaUpdateMethodType;
	updateMethodIn : string;
	categoryFullIdsStartsWith : string;
	categoryFullIdsEqual : string;
	permissionNamesMatchAnd : string;
	permissionNamesMatchOr : string;
	permissionNamesNotContains : string;

    constructor(data? : KalturaCategoryUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryUserBaseFilter' },
				categoryIdEqual : { type : 'n' },
				categoryIdIn : { type : 's' },
				userIdEqual : { type : 's' },
				userIdIn : { type : 's' },
				permissionLevelEqual : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				permissionLevelIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaCategoryUserStatus, subType : 'KalturaCategoryUserStatus' },
				statusIn : { type : 's' },
				createdAtGreaterThanOrEqual : { type : 'd' },
				createdAtLessThanOrEqual : { type : 'd' },
				updatedAtGreaterThanOrEqual : { type : 'd' },
				updatedAtLessThanOrEqual : { type : 'd' },
				updateMethodEqual : { type : 'en', subTypeConstructor : KalturaUpdateMethodType, subType : 'KalturaUpdateMethodType' },
				updateMethodIn : { type : 's' },
				categoryFullIdsStartsWith : { type : 's' },
				categoryFullIdsEqual : { type : 's' },
				permissionNamesMatchAnd : { type : 's' },
				permissionNamesMatchOr : { type : 's' },
				permissionNamesNotContains : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCategoryUserBaseFilter',KalturaCategoryUserBaseFilter);

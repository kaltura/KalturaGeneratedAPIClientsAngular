
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryUserFieldName } from './KalturaESearchCategoryUserFieldName';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaESearchAbstractCategoryItem, KalturaESearchAbstractCategoryItemArgs } from './KalturaESearchAbstractCategoryItem';

export interface KalturaESearchCategoryUserItemArgs  extends KalturaESearchAbstractCategoryItemArgs {
    fieldName? : KalturaESearchCategoryUserFieldName;
	permissionLevel? : KalturaCategoryUserPermissionLevel;
	permissionName? : string;
}


export class KalturaESearchCategoryUserItem extends KalturaESearchAbstractCategoryItem {

    fieldName : KalturaESearchCategoryUserFieldName;
	permissionLevel : KalturaCategoryUserPermissionLevel;
	permissionName : string;

    constructor(data? : KalturaESearchCategoryUserItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryUserItem' },
				fieldName : { type : 'es', subTypeConstructor : KalturaESearchCategoryUserFieldName, subType : 'KalturaESearchCategoryUserFieldName' },
				permissionLevel : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				permissionName : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCategoryUserItem'] = KalturaESearchCategoryUserItem;
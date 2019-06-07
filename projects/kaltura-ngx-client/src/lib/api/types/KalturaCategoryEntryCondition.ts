
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryUserPermissionLevel } from './KalturaCategoryUserPermissionLevel';
import { KalturaSearchConditionComparison } from './KalturaSearchConditionComparison';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaCategoryEntryConditionArgs  extends KalturaConditionArgs {
    categoryId? : number;
	categoryIds? : string;
	categoryUserPermission? : KalturaCategoryUserPermissionLevel;
	comparison? : KalturaSearchConditionComparison;
}


export class KalturaCategoryEntryCondition extends KalturaCondition {

    categoryId : number;
	categoryIds : string;
	categoryUserPermission : KalturaCategoryUserPermissionLevel;
	comparison : KalturaSearchConditionComparison;

    constructor(data? : KalturaCategoryEntryConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryCondition' },
				categoryId : { type : 'n' },
				categoryIds : { type : 's' },
				categoryUserPermission : { type : 'en', subTypeConstructor : KalturaCategoryUserPermissionLevel, subType : 'KalturaCategoryUserPermissionLevel' },
				comparison : { type : 'es', subTypeConstructor : KalturaSearchConditionComparison, subType : 'KalturaSearchConditionComparison' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryEntryCondition'] = KalturaCategoryEntryCondition;
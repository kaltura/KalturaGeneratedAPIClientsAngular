
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskAddOrRemoveType } from './KalturaScheduledTaskAddOrRemoveType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaModifyCategoriesObjectTaskArgs  extends KalturaObjectTaskArgs {
    addRemoveType? : KalturaScheduledTaskAddOrRemoveType;
	categoryIds? : KalturaIntegerValue[];
}


export class KalturaModifyCategoriesObjectTask extends KalturaObjectTask {

    addRemoveType : KalturaScheduledTaskAddOrRemoveType;
	categoryIds : KalturaIntegerValue[];

    constructor(data? : KalturaModifyCategoriesObjectTaskArgs)
    {
        super(data);
        if (typeof this.categoryIds === 'undefined') this.categoryIds = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaModifyCategoriesObjectTask' },
				addRemoveType : { type : 'en', subTypeConstructor : KalturaScheduledTaskAddOrRemoveType, subType : 'KalturaScheduledTaskAddOrRemoveType' },
				categoryIds : { type : 'a', subTypeConstructor : KalturaIntegerValue, subType : 'KalturaIntegerValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaModifyCategoriesObjectTask',KalturaModifyCategoriesObjectTask);

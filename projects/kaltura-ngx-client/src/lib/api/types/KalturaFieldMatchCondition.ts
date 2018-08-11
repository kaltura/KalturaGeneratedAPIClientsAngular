
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaStringField } from './KalturaStringField';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaFieldMatchConditionArgs  extends KalturaMatchConditionArgs {
    field? : KalturaStringField;
}


export class KalturaFieldMatchCondition extends KalturaMatchCondition {

    field : KalturaStringField;

    constructor(data? : KalturaFieldMatchConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFieldMatchCondition' },
				field : { type : 'o', subTypeConstructor : KalturaStringField, subType : 'KalturaStringField' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaFieldMatchCondition'] = KalturaFieldMatchCondition;
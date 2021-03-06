
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaEntryMatchAttribute } from './KalturaMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaMediaEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaMediaEntryMatchAttribute;
}


export class KalturaMediaEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaMediaEntryMatchAttribute;

    constructor(data? : KalturaMediaEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaMediaEntryMatchAttribute, subType : 'KalturaMediaEntryMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaEntryMatchAttributeCondition'] = KalturaMediaEntryMatchAttributeCondition;
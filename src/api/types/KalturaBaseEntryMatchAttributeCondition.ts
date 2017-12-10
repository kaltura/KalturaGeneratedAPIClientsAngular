
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBaseEntryMatchAttribute } from './KalturaBaseEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaBaseEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaBaseEntryMatchAttribute;
}


export class KalturaBaseEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaBaseEntryMatchAttribute;

    constructor(data? : KalturaBaseEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaBaseEntryMatchAttribute, subType : 'KalturaBaseEntryMatchAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryMatchAttributeCondition',KalturaBaseEntryMatchAttributeCondition);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDataEntryMatchAttribute } from './KalturaDataEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaDataEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaDataEntryMatchAttribute;
}


export class KalturaDataEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaDataEntryMatchAttribute;

    constructor(data? : KalturaDataEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaDataEntryMatchAttribute, subType : 'KalturaDataEntryMatchAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDataEntryMatchAttributeCondition',KalturaDataEntryMatchAttributeCondition);

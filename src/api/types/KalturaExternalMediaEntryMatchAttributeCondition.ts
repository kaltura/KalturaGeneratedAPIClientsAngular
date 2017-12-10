
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaExternalMediaEntryMatchAttribute } from './KalturaExternalMediaEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaExternalMediaEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaExternalMediaEntryMatchAttribute;
}


export class KalturaExternalMediaEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaExternalMediaEntryMatchAttribute;

    constructor(data? : KalturaExternalMediaEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaExternalMediaEntryMatchAttribute, subType : 'KalturaExternalMediaEntryMatchAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaExternalMediaEntryMatchAttributeCondition',KalturaExternalMediaEntryMatchAttributeCondition);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDocumentEntryMatchAttribute } from './KalturaDocumentEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaDocumentEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaDocumentEntryMatchAttribute;
}


export class KalturaDocumentEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaDocumentEntryMatchAttribute;

    constructor(data? : KalturaDocumentEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDocumentEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaDocumentEntryMatchAttribute, subType : 'KalturaDocumentEntryMatchAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDocumentEntryMatchAttributeCondition',KalturaDocumentEntryMatchAttributeCondition);

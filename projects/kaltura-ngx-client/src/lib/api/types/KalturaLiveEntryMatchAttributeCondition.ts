
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveEntryMatchAttribute } from './KalturaLiveEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveEntryMatchAttribute;
}


export class KalturaLiveEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveEntryMatchAttribute;

    constructor(data? : KalturaLiveEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveEntryMatchAttribute, subType : 'KalturaLiveEntryMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryMatchAttributeCondition'] = KalturaLiveEntryMatchAttributeCondition;
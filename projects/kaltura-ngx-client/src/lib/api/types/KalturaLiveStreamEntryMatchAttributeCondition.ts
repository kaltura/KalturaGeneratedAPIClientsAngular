
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveStreamEntryMatchAttribute } from './KalturaLiveStreamEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveStreamEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveStreamEntryMatchAttribute;
}


export class KalturaLiveStreamEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveStreamEntryMatchAttribute;

    constructor(data? : KalturaLiveStreamEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveStreamEntryMatchAttribute, subType : 'KalturaLiveStreamEntryMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamEntryMatchAttributeCondition'] = KalturaLiveStreamEntryMatchAttributeCondition;
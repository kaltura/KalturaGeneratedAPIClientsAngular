
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveChannelMatchAttribute } from './KalturaLiveChannelMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveChannelMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveChannelMatchAttribute;
}


export class KalturaLiveChannelMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveChannelMatchAttribute;

    constructor(data? : KalturaLiveChannelMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveChannelMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveChannelMatchAttribute, subType : 'KalturaLiveChannelMatchAttribute' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveChannelMatchAttributeCondition'] = KalturaLiveChannelMatchAttributeCondition;
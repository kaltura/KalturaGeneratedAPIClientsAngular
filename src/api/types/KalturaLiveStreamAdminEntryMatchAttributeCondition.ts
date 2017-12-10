
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamAdminEntryMatchAttribute } from './KalturaLiveStreamAdminEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaLiveStreamAdminEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaLiveStreamAdminEntryMatchAttribute;
}


export class KalturaLiveStreamAdminEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaLiveStreamAdminEntryMatchAttribute;

    constructor(data? : KalturaLiveStreamAdminEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamAdminEntryMatchAttributeCondition' },
				attribute : { type : 'es', subTypeConstructor : KalturaLiveStreamAdminEntryMatchAttribute, subType : 'KalturaLiveStreamAdminEntryMatchAttribute' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamAdminEntryMatchAttributeCondition',KalturaLiveStreamAdminEntryMatchAttributeCondition);

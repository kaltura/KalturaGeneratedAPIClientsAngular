
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaEntryScheduledConditionArgs  extends KalturaConditionArgs {
    
}


export class KalturaEntryScheduledCondition extends KalturaCondition {

    

    constructor(data? : KalturaEntryScheduledConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryScheduledCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryScheduledCondition'] = KalturaEntryScheduledCondition;
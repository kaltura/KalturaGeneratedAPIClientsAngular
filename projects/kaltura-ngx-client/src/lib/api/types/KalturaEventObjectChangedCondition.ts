
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaEventObjectChangedConditionArgs  extends KalturaConditionArgs {
    modifiedColumns? : string;
}


export class KalturaEventObjectChangedCondition extends KalturaCondition {

    modifiedColumns : string;

    constructor(data? : KalturaEventObjectChangedConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventObjectChangedCondition' },
				modifiedColumns : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventObjectChangedCondition'] = KalturaEventObjectChangedCondition;
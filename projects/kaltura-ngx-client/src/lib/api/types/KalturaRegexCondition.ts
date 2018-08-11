
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaRegexConditionArgs  extends KalturaMatchConditionArgs {
    
}


export class KalturaRegexCondition extends KalturaMatchCondition {

    

    constructor(data? : KalturaRegexConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegexCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegexCondition'] = KalturaRegexCondition;
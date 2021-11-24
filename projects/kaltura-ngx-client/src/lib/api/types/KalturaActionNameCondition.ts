
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRegexCondition, KalturaRegexConditionArgs } from './KalturaRegexCondition';

export interface KalturaActionNameConditionArgs  extends KalturaRegexConditionArgs {
    
}


export class KalturaActionNameCondition extends KalturaRegexCondition {

    

    constructor(data? : KalturaActionNameConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaActionNameCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaActionNameCondition'] = KalturaActionNameCondition;
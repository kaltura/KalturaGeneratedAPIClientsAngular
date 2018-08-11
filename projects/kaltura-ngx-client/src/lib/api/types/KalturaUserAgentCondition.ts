
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRegexCondition, KalturaRegexConditionArgs } from './KalturaRegexCondition';

export interface KalturaUserAgentConditionArgs  extends KalturaRegexConditionArgs {
    
}


export class KalturaUserAgentCondition extends KalturaRegexCondition {

    

    constructor(data? : KalturaUserAgentConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAgentCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserAgentCondition'] = KalturaUserAgentCondition;
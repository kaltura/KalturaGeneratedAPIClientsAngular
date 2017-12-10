
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaUserAgentCondition',KalturaUserAgentCondition);

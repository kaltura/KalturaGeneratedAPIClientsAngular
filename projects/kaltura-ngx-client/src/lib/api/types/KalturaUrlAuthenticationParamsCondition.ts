
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaUrlAuthenticationParamsConditionArgs  extends KalturaConditionArgs {
    
}


export class KalturaUrlAuthenticationParamsCondition extends KalturaCondition {

    

    constructor(data? : KalturaUrlAuthenticationParamsConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlAuthenticationParamsCondition' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlAuthenticationParamsCondition'] = KalturaUrlAuthenticationParamsCondition;
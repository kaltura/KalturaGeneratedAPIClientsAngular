
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaSiteConditionArgs  extends KalturaMatchConditionArgs {
    
}


export class KalturaSiteCondition extends KalturaMatchCondition {

    

    constructor(data? : KalturaSiteConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSiteCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSiteCondition',KalturaSiteCondition);

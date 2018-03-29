
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaABCScreenersWatermarkConditionArgs  extends KalturaConditionArgs {
    
}


export class KalturaABCScreenersWatermarkCondition extends KalturaCondition {

    

    constructor(data? : KalturaABCScreenersWatermarkConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaABCScreenersWatermarkCondition' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaABCScreenersWatermarkCondition',KalturaABCScreenersWatermarkCondition);

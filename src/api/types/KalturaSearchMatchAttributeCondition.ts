
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAttributeCondition, KalturaAttributeConditionArgs } from './KalturaAttributeCondition';

export interface KalturaSearchMatchAttributeConditionArgs  extends KalturaAttributeConditionArgs {
    not? : boolean;
}


export class KalturaSearchMatchAttributeCondition extends KalturaAttributeCondition {

    not : boolean;

    constructor(data? : KalturaSearchMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchMatchAttributeCondition' },
				not : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSearchMatchAttributeCondition',KalturaSearchMatchAttributeCondition);

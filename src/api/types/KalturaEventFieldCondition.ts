
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBooleanField } from './KalturaBooleanField';
import { KalturaCondition, KalturaConditionArgs } from './KalturaCondition';

export interface KalturaEventFieldConditionArgs  extends KalturaConditionArgs {
    field? : KalturaBooleanField;
}


export class KalturaEventFieldCondition extends KalturaCondition {

    field : KalturaBooleanField;

    constructor(data? : KalturaEventFieldConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventFieldCondition' },
				field : { type : 'o', subTypeConstructor : KalturaBooleanField, subType : 'KalturaBooleanField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventFieldCondition',KalturaEventFieldCondition);

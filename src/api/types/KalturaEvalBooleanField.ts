
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBooleanField, KalturaBooleanFieldArgs } from './KalturaBooleanField';

export interface KalturaEvalBooleanFieldArgs  extends KalturaBooleanFieldArgs {
    code? : string;
}


export class KalturaEvalBooleanField extends KalturaBooleanField {

    code : string;

    constructor(data? : KalturaEvalBooleanFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEvalBooleanField' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEvalBooleanField',KalturaEvalBooleanField);

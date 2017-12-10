
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaEvalStringFieldArgs  extends KalturaStringFieldArgs {
    code? : string;
}


export class KalturaEvalStringField extends KalturaStringField {

    code : string;

    constructor(data? : KalturaEvalStringFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEvalStringField' },
				code : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEvalStringField',KalturaEvalStringField);

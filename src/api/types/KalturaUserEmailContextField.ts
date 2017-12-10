
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaUserEmailContextFieldArgs  extends KalturaStringFieldArgs {
    
}


export class KalturaUserEmailContextField extends KalturaStringField {

    

    constructor(data? : KalturaUserEmailContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserEmailContextField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserEmailContextField',KalturaUserEmailContextField);

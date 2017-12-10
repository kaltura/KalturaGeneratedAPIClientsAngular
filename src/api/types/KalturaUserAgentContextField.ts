
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaUserAgentContextFieldArgs  extends KalturaStringFieldArgs {
    
}


export class KalturaUserAgentContextField extends KalturaStringField {

    

    constructor(data? : KalturaUserAgentContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserAgentContextField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUserAgentContextField',KalturaUserAgentContextField);

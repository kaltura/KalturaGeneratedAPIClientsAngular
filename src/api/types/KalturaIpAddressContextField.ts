
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaIpAddressContextFieldArgs  extends KalturaStringFieldArgs {
    
}


export class KalturaIpAddressContextField extends KalturaStringField {

    

    constructor(data? : KalturaIpAddressContextFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIpAddressContextField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIpAddressContextField',KalturaIpAddressContextField);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegerValue, KalturaIntegerValueArgs } from './KalturaIntegerValue';

export interface KalturaIntegerFieldArgs  extends KalturaIntegerValueArgs {
    
}


export class KalturaIntegerField extends KalturaIntegerValue {

    

    constructor(data? : KalturaIntegerFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegerField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIntegerField',KalturaIntegerField);

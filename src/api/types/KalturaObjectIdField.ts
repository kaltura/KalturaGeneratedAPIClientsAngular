
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaStringField, KalturaStringFieldArgs } from './KalturaStringField';

export interface KalturaObjectIdFieldArgs  extends KalturaStringFieldArgs {
    
}


export class KalturaObjectIdField extends KalturaStringField {

    

    constructor(data? : KalturaObjectIdFieldArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObjectIdField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectIdField',KalturaObjectIdField);

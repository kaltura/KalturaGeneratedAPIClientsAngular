
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBulkServiceDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBulkServiceData extends KalturaObjectBase {

    

    constructor(data? : KalturaBulkServiceDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBulkServiceData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBulkServiceData',KalturaBulkServiceData);

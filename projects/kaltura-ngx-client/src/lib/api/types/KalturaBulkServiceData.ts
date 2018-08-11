
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaBulkServiceData'] = KalturaBulkServiceData;
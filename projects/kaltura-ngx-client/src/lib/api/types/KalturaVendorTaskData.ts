
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVendorTaskDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaVendorTaskData extends KalturaObjectBase {

    

    constructor(data? : KalturaVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVendorTaskData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVendorTaskData'] = KalturaVendorTaskData;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaJobDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaJobData extends KalturaObjectBase {

    

    constructor(data? : KalturaJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaJobData' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaJobData'] = KalturaJobData;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaResourceArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaResource extends KalturaObjectBase {

    

    constructor(data? : KalturaResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaResource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaResource'] = KalturaResource;
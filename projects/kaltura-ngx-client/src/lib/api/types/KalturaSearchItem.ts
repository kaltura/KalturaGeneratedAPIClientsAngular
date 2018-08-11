
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaSearchItemArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaSearchItem extends KalturaObjectBase {

    

    constructor(data? : KalturaSearchItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSearchItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSearchItem'] = KalturaSearchItem;
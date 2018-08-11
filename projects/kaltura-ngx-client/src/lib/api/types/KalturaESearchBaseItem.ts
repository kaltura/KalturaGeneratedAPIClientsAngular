
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaESearchBaseItemArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaESearchBaseItem extends KalturaObjectBase {

    

    constructor(data? : KalturaESearchBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchBaseItem'] = KalturaESearchBaseItem;
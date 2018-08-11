
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchCategoryBaseItemArgs  extends KalturaESearchBaseItemArgs {
    
}


export class KalturaESearchCategoryBaseItem extends KalturaESearchBaseItem {

    

    constructor(data? : KalturaESearchCategoryBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchCategoryBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchCategoryBaseItem'] = KalturaESearchCategoryBaseItem;
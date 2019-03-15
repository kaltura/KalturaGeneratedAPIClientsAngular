
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchBaseItem, KalturaESearchBaseItemArgs } from './KalturaESearchBaseItem';

export interface KalturaESearchGroupBaseItemArgs  extends KalturaESearchBaseItemArgs {
    
}


export class KalturaESearchGroupBaseItem extends KalturaESearchBaseItem {

    

    constructor(data? : KalturaESearchGroupBaseItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchGroupBaseItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchGroupBaseItem'] = KalturaESearchGroupBaseItem;
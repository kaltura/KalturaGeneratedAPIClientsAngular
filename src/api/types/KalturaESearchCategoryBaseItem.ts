
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaESearchCategoryBaseItem',KalturaESearchCategoryBaseItem);

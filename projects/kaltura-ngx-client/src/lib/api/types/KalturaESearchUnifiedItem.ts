
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchAbstractEntryItem, KalturaESearchAbstractEntryItemArgs } from './KalturaESearchAbstractEntryItem';

export interface KalturaESearchUnifiedItemArgs  extends KalturaESearchAbstractEntryItemArgs {
    
}


export class KalturaESearchUnifiedItem extends KalturaESearchAbstractEntryItem {

    

    constructor(data? : KalturaESearchUnifiedItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaESearchUnifiedItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaESearchUnifiedItem'] = KalturaESearchUnifiedItem;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseEntryCloneOptionItemArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseEntryCloneOptionItem extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseEntryCloneOptionItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryCloneOptionItem' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseEntryCloneOptionItem'] = KalturaBaseEntryCloneOptionItem;
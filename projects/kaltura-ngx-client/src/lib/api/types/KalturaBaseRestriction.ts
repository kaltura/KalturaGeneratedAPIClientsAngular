
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseRestrictionArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseRestriction extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseRestriction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseRestriction'] = KalturaBaseRestriction;
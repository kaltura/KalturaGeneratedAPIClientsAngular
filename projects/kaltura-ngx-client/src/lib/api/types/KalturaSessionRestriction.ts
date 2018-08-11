
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseRestriction, KalturaBaseRestrictionArgs } from './KalturaBaseRestriction';

export interface KalturaSessionRestrictionArgs  extends KalturaBaseRestrictionArgs {
    
}


export class KalturaSessionRestriction extends KalturaBaseRestriction {

    

    constructor(data? : KalturaSessionRestrictionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaSessionRestriction' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaSessionRestriction'] = KalturaSessionRestriction;
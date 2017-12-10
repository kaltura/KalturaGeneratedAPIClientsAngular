
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaBaseRestriction',KalturaBaseRestriction);

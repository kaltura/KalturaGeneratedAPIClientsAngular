
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBaseResponseProfileArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaBaseResponseProfile extends KalturaObjectBase {

    

    constructor(data? : KalturaBaseResponseProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseResponseProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseResponseProfile',KalturaBaseResponseProfile);

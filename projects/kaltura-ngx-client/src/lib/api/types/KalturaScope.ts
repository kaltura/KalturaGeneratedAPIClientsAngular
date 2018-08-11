
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScopeArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaScope extends KalturaObjectBase {

    

    constructor(data? : KalturaScopeArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScope' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScope'] = KalturaScope;
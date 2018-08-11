
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaObject extends KalturaObjectBase {

    

    constructor(data? : KalturaObjectArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObject' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaObject'] = KalturaObject;
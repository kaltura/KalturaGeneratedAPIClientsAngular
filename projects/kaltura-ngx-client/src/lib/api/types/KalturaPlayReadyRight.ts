
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPlayReadyRightArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPlayReadyRight extends KalturaObjectBase {

    

    constructor(data? : KalturaPlayReadyRightArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyRight' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPlayReadyRight'] = KalturaPlayReadyRight;
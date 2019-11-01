
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseUserBaseFilter, KalturaBaseUserBaseFilterArgs } from './KalturaBaseUserBaseFilter';

export interface KalturaBaseUserFilterArgs  extends KalturaBaseUserBaseFilterArgs {
    
}


export class KalturaBaseUserFilter extends KalturaBaseUserBaseFilter {

    

    constructor(data? : KalturaBaseUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseUserFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBaseUserFilter'] = KalturaBaseUserFilter;
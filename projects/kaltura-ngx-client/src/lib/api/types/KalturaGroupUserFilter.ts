
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaGroupUserBaseFilter, KalturaGroupUserBaseFilterArgs } from './KalturaGroupUserBaseFilter';

export interface KalturaGroupUserFilterArgs  extends KalturaGroupUserBaseFilterArgs {
    
}


export class KalturaGroupUserFilter extends KalturaGroupUserBaseFilter {

    

    constructor(data? : KalturaGroupUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaGroupUserFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaGroupUserFilter'] = KalturaGroupUserFilter;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaRatingCountBaseFilter, KalturaRatingCountBaseFilterArgs } from './KalturaRatingCountBaseFilter';

export interface KalturaRatingCountFilterArgs  extends KalturaRatingCountBaseFilterArgs {
    
}


export class KalturaRatingCountFilter extends KalturaRatingCountBaseFilter {

    

    constructor(data? : KalturaRatingCountFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRatingCountFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRatingCountFilter'] = KalturaRatingCountFilter;
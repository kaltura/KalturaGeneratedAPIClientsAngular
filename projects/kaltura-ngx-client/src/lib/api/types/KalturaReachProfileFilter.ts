
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaReachProfileBaseFilter, KalturaReachProfileBaseFilterArgs } from './KalturaReachProfileBaseFilter';

export interface KalturaReachProfileFilterArgs  extends KalturaReachProfileBaseFilterArgs {
    
}


export class KalturaReachProfileFilter extends KalturaReachProfileBaseFilter {

    

    constructor(data? : KalturaReachProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaReachProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaReachProfileFilter'] = KalturaReachProfileFilter;
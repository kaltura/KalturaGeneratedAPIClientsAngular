
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaDrmProfileFilter, KalturaDrmProfileFilterArgs } from './KalturaDrmProfileFilter';

export interface KalturaWidevineProfileBaseFilterArgs  extends KalturaDrmProfileFilterArgs {
    
}


export class KalturaWidevineProfileBaseFilter extends KalturaDrmProfileFilter {

    

    constructor(data? : KalturaWidevineProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineProfileBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineProfileBaseFilter'] = KalturaWidevineProfileBaseFilter;
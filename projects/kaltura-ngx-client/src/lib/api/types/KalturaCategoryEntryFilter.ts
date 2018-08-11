
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryBaseFilter, KalturaCategoryEntryBaseFilterArgs } from './KalturaCategoryEntryBaseFilter';

export interface KalturaCategoryEntryFilterArgs  extends KalturaCategoryEntryBaseFilterArgs {
    
}


export class KalturaCategoryEntryFilter extends KalturaCategoryEntryBaseFilter {

    

    constructor(data? : KalturaCategoryEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCategoryEntryFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCategoryEntryFilter'] = KalturaCategoryEntryFilter;
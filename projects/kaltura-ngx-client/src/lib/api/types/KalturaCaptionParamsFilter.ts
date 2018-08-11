
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionParamsBaseFilter, KalturaCaptionParamsBaseFilterArgs } from './KalturaCaptionParamsBaseFilter';

export interface KalturaCaptionParamsFilterArgs  extends KalturaCaptionParamsBaseFilterArgs {
    
}


export class KalturaCaptionParamsFilter extends KalturaCaptionParamsBaseFilter {

    

    constructor(data? : KalturaCaptionParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionParamsFilter'] = KalturaCaptionParamsFilter;
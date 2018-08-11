
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileBaseFilter, KalturaConversionProfileBaseFilterArgs } from './KalturaConversionProfileBaseFilter';

export interface KalturaConversionProfileFilterArgs  extends KalturaConversionProfileBaseFilterArgs {
    
}


export class KalturaConversionProfileFilter extends KalturaConversionProfileBaseFilter {

    

    constructor(data? : KalturaConversionProfileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConversionProfileFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaConversionProfileFilter'] = KalturaConversionProfileFilter;
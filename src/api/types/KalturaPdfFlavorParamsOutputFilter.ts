
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPdfFlavorParamsOutputBaseFilter, KalturaPdfFlavorParamsOutputBaseFilterArgs } from './KalturaPdfFlavorParamsOutputBaseFilter';

export interface KalturaPdfFlavorParamsOutputFilterArgs  extends KalturaPdfFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaPdfFlavorParamsOutputFilter extends KalturaPdfFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaPdfFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPdfFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPdfFlavorParamsOutputFilter',KalturaPdfFlavorParamsOutputFilter);

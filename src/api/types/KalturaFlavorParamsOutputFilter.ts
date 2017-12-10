
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsOutputBaseFilter, KalturaFlavorParamsOutputBaseFilterArgs } from './KalturaFlavorParamsOutputBaseFilter';

export interface KalturaFlavorParamsOutputFilterArgs  extends KalturaFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaFlavorParamsOutputFilter extends KalturaFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorParamsOutputFilter',KalturaFlavorParamsOutputFilter);

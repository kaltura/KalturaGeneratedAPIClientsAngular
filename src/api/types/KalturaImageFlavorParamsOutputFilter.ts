
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImageFlavorParamsOutputBaseFilter, KalturaImageFlavorParamsOutputBaseFilterArgs } from './KalturaImageFlavorParamsOutputBaseFilter';

export interface KalturaImageFlavorParamsOutputFilterArgs  extends KalturaImageFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaImageFlavorParamsOutputFilter extends KalturaImageFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaImageFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageFlavorParamsOutputFilter',KalturaImageFlavorParamsOutputFilter);

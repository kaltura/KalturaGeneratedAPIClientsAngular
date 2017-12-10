
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsBaseFilter, KalturaFlavorParamsBaseFilterArgs } from './KalturaFlavorParamsBaseFilter';

export interface KalturaFlavorParamsFilterArgs  extends KalturaFlavorParamsBaseFilterArgs {
    
}


export class KalturaFlavorParamsFilter extends KalturaFlavorParamsBaseFilter {

    

    constructor(data? : KalturaFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorParamsFilter',KalturaFlavorParamsFilter);

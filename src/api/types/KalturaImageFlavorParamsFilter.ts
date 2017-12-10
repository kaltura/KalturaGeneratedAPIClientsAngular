
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaImageFlavorParamsBaseFilter, KalturaImageFlavorParamsBaseFilterArgs } from './KalturaImageFlavorParamsBaseFilter';

export interface KalturaImageFlavorParamsFilterArgs  extends KalturaImageFlavorParamsBaseFilterArgs {
    
}


export class KalturaImageFlavorParamsFilter extends KalturaImageFlavorParamsBaseFilter {

    

    constructor(data? : KalturaImageFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaImageFlavorParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaImageFlavorParamsFilter',KalturaImageFlavorParamsFilter);

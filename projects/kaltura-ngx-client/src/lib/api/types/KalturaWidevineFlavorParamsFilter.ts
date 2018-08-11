
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaWidevineFlavorParamsBaseFilter, KalturaWidevineFlavorParamsBaseFilterArgs } from './KalturaWidevineFlavorParamsBaseFilter';

export interface KalturaWidevineFlavorParamsFilterArgs  extends KalturaWidevineFlavorParamsBaseFilterArgs {
    
}


export class KalturaWidevineFlavorParamsFilter extends KalturaWidevineFlavorParamsBaseFilter {

    

    constructor(data? : KalturaWidevineFlavorParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaWidevineFlavorParamsFilter'] = KalturaWidevineFlavorParamsFilter;
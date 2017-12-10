
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidevineFlavorParamsOutputBaseFilter, KalturaWidevineFlavorParamsOutputBaseFilterArgs } from './KalturaWidevineFlavorParamsOutputBaseFilter';

export interface KalturaWidevineFlavorParamsOutputFilterArgs  extends KalturaWidevineFlavorParamsOutputBaseFilterArgs {
    
}


export class KalturaWidevineFlavorParamsOutputFilter extends KalturaWidevineFlavorParamsOutputBaseFilter {

    

    constructor(data? : KalturaWidevineFlavorParamsOutputFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorParamsOutputFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineFlavorParamsOutputFilter',KalturaWidevineFlavorParamsOutputFilter);

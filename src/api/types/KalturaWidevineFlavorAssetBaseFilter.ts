
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorAssetFilter, KalturaFlavorAssetFilterArgs } from './KalturaFlavorAssetFilter';

export interface KalturaWidevineFlavorAssetBaseFilterArgs  extends KalturaFlavorAssetFilterArgs {
    
}


export class KalturaWidevineFlavorAssetBaseFilter extends KalturaFlavorAssetFilter {

    

    constructor(data? : KalturaWidevineFlavorAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorAssetBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineFlavorAssetBaseFilter',KalturaWidevineFlavorAssetBaseFilter);

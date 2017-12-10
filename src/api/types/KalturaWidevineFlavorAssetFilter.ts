
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaWidevineFlavorAssetBaseFilter, KalturaWidevineFlavorAssetBaseFilterArgs } from './KalturaWidevineFlavorAssetBaseFilter';

export interface KalturaWidevineFlavorAssetFilterArgs  extends KalturaWidevineFlavorAssetBaseFilterArgs {
    
}


export class KalturaWidevineFlavorAssetFilter extends KalturaWidevineFlavorAssetBaseFilter {

    

    constructor(data? : KalturaWidevineFlavorAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaWidevineFlavorAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaWidevineFlavorAssetFilter',KalturaWidevineFlavorAssetFilter);

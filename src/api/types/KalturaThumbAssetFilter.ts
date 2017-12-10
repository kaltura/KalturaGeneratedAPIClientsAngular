
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbAssetBaseFilter, KalturaThumbAssetBaseFilterArgs } from './KalturaThumbAssetBaseFilter';

export interface KalturaThumbAssetFilterArgs  extends KalturaThumbAssetBaseFilterArgs {
    
}


export class KalturaThumbAssetFilter extends KalturaThumbAssetBaseFilter {

    

    constructor(data? : KalturaThumbAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbAssetFilter',KalturaThumbAssetFilter);

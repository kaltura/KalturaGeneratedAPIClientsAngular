
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveAssetBaseFilter, KalturaLiveAssetBaseFilterArgs } from './KalturaLiveAssetBaseFilter';

export interface KalturaLiveAssetFilterArgs  extends KalturaLiveAssetBaseFilterArgs {
    
}


export class KalturaLiveAssetFilter extends KalturaLiveAssetBaseFilter {

    

    constructor(data? : KalturaLiveAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveAssetFilter',KalturaLiveAssetFilter);

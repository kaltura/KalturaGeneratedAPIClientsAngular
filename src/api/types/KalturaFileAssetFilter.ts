
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileAssetBaseFilter, KalturaFileAssetBaseFilterArgs } from './KalturaFileAssetBaseFilter';

export interface KalturaFileAssetFilterArgs  extends KalturaFileAssetBaseFilterArgs {
    
}


export class KalturaFileAssetFilter extends KalturaFileAssetBaseFilter {

    

    constructor(data? : KalturaFileAssetFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFileAssetFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileAssetFilter',KalturaFileAssetFilter);

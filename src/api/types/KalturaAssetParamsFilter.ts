
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetParamsBaseFilter, KalturaAssetParamsBaseFilterArgs } from './KalturaAssetParamsBaseFilter';

export interface KalturaAssetParamsFilterArgs  extends KalturaAssetParamsBaseFilterArgs {
    
}


export class KalturaAssetParamsFilter extends KalturaAssetParamsBaseFilter {

    

    constructor(data? : KalturaAssetParamsFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAssetParamsFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAssetParamsFilter',KalturaAssetParamsFilter);

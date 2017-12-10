
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorParamsFilter, KalturaFlavorParamsFilterArgs } from './KalturaFlavorParamsFilter';

export interface KalturaFlavorParamsOutputBaseFilterArgs  extends KalturaFlavorParamsFilterArgs {
    flavorParamsIdEqual? : number;
	flavorParamsVersionEqual? : string;
	flavorAssetIdEqual? : string;
	flavorAssetVersionEqual? : string;
}


export class KalturaFlavorParamsOutputBaseFilter extends KalturaFlavorParamsFilter {

    flavorParamsIdEqual : number;
	flavorParamsVersionEqual : string;
	flavorAssetIdEqual : string;
	flavorAssetVersionEqual : string;

    constructor(data? : KalturaFlavorParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParamsOutputBaseFilter' },
				flavorParamsIdEqual : { type : 'n' },
				flavorParamsVersionEqual : { type : 's' },
				flavorAssetIdEqual : { type : 's' },
				flavorAssetVersionEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorParamsOutputBaseFilter',KalturaFlavorParamsOutputBaseFilter);

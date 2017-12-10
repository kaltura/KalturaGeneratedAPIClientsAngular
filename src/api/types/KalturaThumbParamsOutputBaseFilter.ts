
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbParamsFilter, KalturaThumbParamsFilterArgs } from './KalturaThumbParamsFilter';

export interface KalturaThumbParamsOutputBaseFilterArgs  extends KalturaThumbParamsFilterArgs {
    thumbParamsIdEqual? : number;
	thumbParamsVersionEqual? : string;
	thumbAssetIdEqual? : string;
	thumbAssetVersionEqual? : string;
}


export class KalturaThumbParamsOutputBaseFilter extends KalturaThumbParamsFilter {

    thumbParamsIdEqual : number;
	thumbParamsVersionEqual : string;
	thumbAssetIdEqual : string;
	thumbAssetVersionEqual : string;

    constructor(data? : KalturaThumbParamsOutputBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbParamsOutputBaseFilter' },
				thumbParamsIdEqual : { type : 'n' },
				thumbParamsVersionEqual : { type : 's' },
				thumbAssetIdEqual : { type : 's' },
				thumbAssetVersionEqual : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbParamsOutputBaseFilter',KalturaThumbParamsOutputBaseFilter);

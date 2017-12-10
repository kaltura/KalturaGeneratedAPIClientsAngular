
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFlavorAssetStatus } from './KalturaFlavorAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaFlavorAssetBaseFilterArgs  extends KalturaAssetFilterArgs {
    flavorParamsIdEqual? : number;
	flavorParamsIdIn? : string;
	statusEqual? : KalturaFlavorAssetStatus;
	statusIn? : string;
	statusNotIn? : string;
}


export class KalturaFlavorAssetBaseFilter extends KalturaAssetFilter {

    flavorParamsIdEqual : number;
	flavorParamsIdIn : string;
	statusEqual : KalturaFlavorAssetStatus;
	statusIn : string;
	statusNotIn : string;

    constructor(data? : KalturaFlavorAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorAssetBaseFilter' },
				flavorParamsIdEqual : { type : 'n' },
				flavorParamsIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaFlavorAssetStatus, subType : 'KalturaFlavorAssetStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorAssetBaseFilter',KalturaFlavorAssetBaseFilter);

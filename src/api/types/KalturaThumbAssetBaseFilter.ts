
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbAssetStatus } from './KalturaThumbAssetStatus';
import { KalturaAssetFilter, KalturaAssetFilterArgs } from './KalturaAssetFilter';

export interface KalturaThumbAssetBaseFilterArgs  extends KalturaAssetFilterArgs {
    thumbParamsIdEqual? : number;
	thumbParamsIdIn? : string;
	statusEqual? : KalturaThumbAssetStatus;
	statusIn? : string;
	statusNotIn? : string;
}


export class KalturaThumbAssetBaseFilter extends KalturaAssetFilter {

    thumbParamsIdEqual : number;
	thumbParamsIdIn : string;
	statusEqual : KalturaThumbAssetStatus;
	statusIn : string;
	statusNotIn : string;

    constructor(data? : KalturaThumbAssetBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbAssetBaseFilter' },
				thumbParamsIdEqual : { type : 'n' },
				thumbParamsIdIn : { type : 's' },
				statusEqual : { type : 'en', subTypeConstructor : KalturaThumbAssetStatus, subType : 'KalturaThumbAssetStatus' },
				statusIn : { type : 's' },
				statusNotIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbAssetBaseFilter',KalturaThumbAssetBaseFilter);


import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaCaptionType } from './KalturaCaptionType';
import { KalturaAssetParamsFilter, KalturaAssetParamsFilterArgs } from './KalturaAssetParamsFilter';

export interface KalturaCaptionParamsBaseFilterArgs  extends KalturaAssetParamsFilterArgs {
    formatEqual? : KalturaCaptionType;
	formatIn? : string;
}


export class KalturaCaptionParamsBaseFilter extends KalturaAssetParamsFilter {

    formatEqual : KalturaCaptionType;
	formatIn : string;

    constructor(data? : KalturaCaptionParamsBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionParamsBaseFilter' },
				formatEqual : { type : 'es', subTypeConstructor : KalturaCaptionType, subType : 'KalturaCaptionType' },
				formatIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCaptionParamsBaseFilter'] = KalturaCaptionParamsBaseFilter;
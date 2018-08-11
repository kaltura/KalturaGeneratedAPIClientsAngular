
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaExternalMediaSourceType } from './KalturaExternalMediaSourceType';
import { KalturaMediaEntryFilter, KalturaMediaEntryFilterArgs } from './KalturaMediaEntryFilter';

export interface KalturaExternalMediaEntryBaseFilterArgs  extends KalturaMediaEntryFilterArgs {
    externalSourceTypeEqual? : KalturaExternalMediaSourceType;
	externalSourceTypeIn? : string;
	assetParamsIdsMatchOr? : string;
	assetParamsIdsMatchAnd? : string;
}


export class KalturaExternalMediaEntryBaseFilter extends KalturaMediaEntryFilter {

    externalSourceTypeEqual : KalturaExternalMediaSourceType;
	externalSourceTypeIn : string;
	assetParamsIdsMatchOr : string;
	assetParamsIdsMatchAnd : string;

    constructor(data? : KalturaExternalMediaEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaExternalMediaEntryBaseFilter' },
				externalSourceTypeEqual : { type : 'es', subTypeConstructor : KalturaExternalMediaSourceType, subType : 'KalturaExternalMediaSourceType' },
				externalSourceTypeIn : { type : 's' },
				assetParamsIdsMatchOr : { type : 's' },
				assetParamsIdsMatchAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaExternalMediaEntryBaseFilter'] = KalturaExternalMediaEntryBaseFilter;
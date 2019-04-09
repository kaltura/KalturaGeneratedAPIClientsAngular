
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserEntryBaseFilter, KalturaUserEntryBaseFilterArgs } from './KalturaUserEntryBaseFilter';

export interface KalturaUserEntryFilterArgs  extends KalturaUserEntryBaseFilterArgs {
    userIdEqualCurrent? : KalturaNullableBoolean;
	isAnonymous? : KalturaNullableBoolean;
	privacyContextEqual? : string;
	privacyContextIn? : string;
	partnerId? : number;
}


export class KalturaUserEntryFilter extends KalturaUserEntryBaseFilter {

    userIdEqualCurrent : KalturaNullableBoolean;
	isAnonymous : KalturaNullableBoolean;
	privacyContextEqual : string;
	privacyContextIn : string;
	partnerId : number;

    constructor(data? : KalturaUserEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserEntryFilter' },
				userIdEqualCurrent : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				isAnonymous : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				privacyContextEqual : { type : 's' },
				privacyContextIn : { type : 's' },
				partnerId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserEntryFilter'] = KalturaUserEntryFilter;
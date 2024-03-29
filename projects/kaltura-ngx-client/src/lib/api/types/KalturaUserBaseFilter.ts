
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseUserFilter, KalturaBaseUserFilterArgs } from './KalturaBaseUserFilter';

export interface KalturaUserBaseFilterArgs  extends KalturaBaseUserFilterArgs {
    idEqual? : string;
	idIn? : string;
	typeEqual? : KalturaUserType;
	typeIn? : string;
	isAdminEqual? : KalturaNullableBoolean;
	firstNameStartsWith? : string;
	lastNameStartsWith? : string;
}


export class KalturaUserBaseFilter extends KalturaBaseUserFilter {

    idEqual : string;
	idIn : string;
	typeEqual : KalturaUserType;
	typeIn : string;
	isAdminEqual : KalturaNullableBoolean;
	firstNameStartsWith : string;
	lastNameStartsWith : string;

    constructor(data? : KalturaUserBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserBaseFilter' },
				idEqual : { type : 's' },
				idIn : { type : 's' },
				typeEqual : { type : 'en', subTypeConstructor : KalturaUserType, subType : 'KalturaUserType' },
				typeIn : { type : 's' },
				isAdminEqual : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				firstNameStartsWith : { type : 's' },
				lastNameStartsWith : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserBaseFilter'] = KalturaUserBaseFilter;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserBaseFilter, KalturaUserBaseFilterArgs } from './KalturaUserBaseFilter';

export interface KalturaUserFilterArgs  extends KalturaUserBaseFilterArgs {
    idOrScreenNameStartsWith? : string;
	loginEnabledEqual? : KalturaNullableBoolean;
	roleIdEqual? : string;
	roleIdsEqual? : string;
	roleIdsIn? : string;
	firstNameOrLastNameStartsWith? : string;
	permissionNamesMultiLikeOr? : string;
	permissionNamesMultiLikeAnd? : string;
}


export class KalturaUserFilter extends KalturaUserBaseFilter {

    idOrScreenNameStartsWith : string;
	loginEnabledEqual : KalturaNullableBoolean;
	roleIdEqual : string;
	roleIdsEqual : string;
	roleIdsIn : string;
	firstNameOrLastNameStartsWith : string;
	permissionNamesMultiLikeOr : string;
	permissionNamesMultiLikeAnd : string;

    constructor(data? : KalturaUserFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUserFilter' },
				idOrScreenNameStartsWith : { type : 's' },
				loginEnabledEqual : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				roleIdEqual : { type : 's' },
				roleIdsEqual : { type : 's' },
				roleIdsIn : { type : 's' },
				firstNameOrLastNameStartsWith : { type : 's' },
				permissionNamesMultiLikeOr : { type : 's' },
				permissionNamesMultiLikeAnd : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUserFilter'] = KalturaUserFilter;
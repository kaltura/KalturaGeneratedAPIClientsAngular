
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaUserBaseFilter, KalturaUserBaseFilterArgs } from './KalturaUserBaseFilter';

export interface KalturaUserFilterArgs  extends KalturaUserBaseFilterArgs {
    idOrScreenNameStartsWith? : string;
	idEqual? : string;
	idIn? : string;
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
	idEqual : string;
	idIn : string;
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
				idEqual : { type : 's' },
				idIn : { type : 's' },
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

KalturaTypesFactory.registerType('KalturaUserFilter',KalturaUserFilter);

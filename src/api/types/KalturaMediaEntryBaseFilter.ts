
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaPlayableEntryFilter, KalturaPlayableEntryFilterArgs } from './KalturaPlayableEntryFilter';

export interface KalturaMediaEntryBaseFilterArgs  extends KalturaPlayableEntryFilterArgs {
    mediaTypeEqual? : KalturaMediaType;
	mediaTypeIn? : string;
	sourceTypeEqual? : KalturaSourceType;
	sourceTypeNotEqual? : KalturaSourceType;
	sourceTypeIn? : string;
	sourceTypeNotIn? : string;
	mediaDateGreaterThanOrEqual? : Date;
	mediaDateLessThanOrEqual? : Date;
	flavorParamsIdsMatchOr? : string;
	flavorParamsIdsMatchAnd? : string;
}


export class KalturaMediaEntryBaseFilter extends KalturaPlayableEntryFilter {

    mediaTypeEqual : KalturaMediaType;
	mediaTypeIn : string;
	sourceTypeEqual : KalturaSourceType;
	sourceTypeNotEqual : KalturaSourceType;
	sourceTypeIn : string;
	sourceTypeNotIn : string;
	mediaDateGreaterThanOrEqual : Date;
	mediaDateLessThanOrEqual : Date;
	flavorParamsIdsMatchOr : string;
	flavorParamsIdsMatchAnd : string;

    constructor(data? : KalturaMediaEntryBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryBaseFilter' },
				mediaTypeEqual : { type : 'en', subTypeConstructor : KalturaMediaType, subType : 'KalturaMediaType' },
				mediaTypeIn : { type : 's' },
				sourceTypeEqual : { type : 'es', subTypeConstructor : KalturaSourceType, subType : 'KalturaSourceType' },
				sourceTypeNotEqual : { type : 'es', subTypeConstructor : KalturaSourceType, subType : 'KalturaSourceType' },
				sourceTypeIn : { type : 's' },
				sourceTypeNotIn : { type : 's' },
				mediaDateGreaterThanOrEqual : { type : 'd' },
				mediaDateLessThanOrEqual : { type : 'd' },
				flavorParamsIdsMatchOr : { type : 's' },
				flavorParamsIdsMatchAnd : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryBaseFilter',KalturaMediaEntryBaseFilter);

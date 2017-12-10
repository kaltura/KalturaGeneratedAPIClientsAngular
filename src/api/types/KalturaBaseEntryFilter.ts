
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaBaseEntryBaseFilter, KalturaBaseEntryBaseFilterArgs } from './KalturaBaseEntryBaseFilter';

export interface KalturaBaseEntryFilterArgs  extends KalturaBaseEntryBaseFilterArgs {
    freeText? : string;
	isRoot? : KalturaNullableBoolean;
	categoriesFullNameIn? : string;
	categoryAncestorIdIn? : string;
	redirectFromEntryId? : string;
}


export class KalturaBaseEntryFilter extends KalturaBaseEntryBaseFilter {

    freeText : string;
	isRoot : KalturaNullableBoolean;
	categoriesFullNameIn : string;
	categoryAncestorIdIn : string;
	redirectFromEntryId : string;

    constructor(data? : KalturaBaseEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBaseEntryFilter' },
				freeText : { type : 's' },
				isRoot : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				categoriesFullNameIn : { type : 's' },
				categoryAncestorIdIn : { type : 's' },
				redirectFromEntryId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBaseEntryFilter',KalturaBaseEntryFilter);

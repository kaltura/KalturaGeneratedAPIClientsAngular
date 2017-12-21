
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaMediaEntryBaseFilter, KalturaMediaEntryBaseFilterArgs } from './KalturaMediaEntryBaseFilter';

export interface KalturaMediaEntryFilterArgs  extends KalturaMediaEntryBaseFilterArgs {
    isSequenceEntry? : KalturaNullableBoolean;
	sequenceEntryIdsIn? : string;
}


export class KalturaMediaEntryFilter extends KalturaMediaEntryBaseFilter {

    isSequenceEntry : KalturaNullableBoolean;
	sequenceEntryIdsIn : string;

    constructor(data? : KalturaMediaEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntryFilter' },
				isSequenceEntry : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				sequenceEntryIdsIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntryFilter',KalturaMediaEntryFilter);

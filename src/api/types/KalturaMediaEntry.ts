
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaStreamContainer } from './KalturaStreamContainer';
import { KalturaPlayableEntry, KalturaPlayableEntryArgs } from './KalturaPlayableEntry';

export interface KalturaMediaEntryArgs  extends KalturaPlayableEntryArgs {
    mediaType? : KalturaMediaType;
	conversionQuality? : string;
	sourceType? : KalturaSourceType;
	searchProviderType? : KalturaSearchProviderType;
	searchProviderId? : string;
	creditUserName? : string;
	creditUrl? : string;
	streams? : KalturaStreamContainer[];
}


export class KalturaMediaEntry extends KalturaPlayableEntry {

    mediaType : KalturaMediaType;
	conversionQuality : string;
	sourceType : KalturaSourceType;
	searchProviderType : KalturaSearchProviderType;
	searchProviderId : string;
	creditUserName : string;
	creditUrl : string;
	readonly mediaDate : Date;
	readonly dataUrl : string;
	readonly flavorParamsIds : string;
	readonly isTrimDisabled : KalturaNullableBoolean;
	streams : KalturaStreamContainer[];

    constructor(data? : KalturaMediaEntryArgs)
    {
        super(data);
        if (typeof this.streams === 'undefined') this.streams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaEntry' },
				mediaType : { type : 'en', subTypeConstructor : KalturaMediaType, subType : 'KalturaMediaType' },
				conversionQuality : { type : 's' },
				sourceType : { type : 'es', subTypeConstructor : KalturaSourceType, subType : 'KalturaSourceType' },
				searchProviderType : { type : 'en', subTypeConstructor : KalturaSearchProviderType, subType : 'KalturaSearchProviderType' },
				searchProviderId : { type : 's' },
				creditUserName : { type : 's' },
				creditUrl : { type : 's' },
				mediaDate : { type : 'd', readOnly : true },
				dataUrl : { type : 's', readOnly : true },
				flavorParamsIds : { type : 's', readOnly : true },
				isTrimDisabled : { type : 'en', readOnly : true, subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				streams : { type : 'a', subTypeConstructor : KalturaStreamContainer, subType : 'KalturaStreamContainer' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaEntry',KalturaMediaEntry);

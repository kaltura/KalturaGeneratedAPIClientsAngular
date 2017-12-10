
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntryBaseFilter, KalturaLiveEntryBaseFilterArgs } from './KalturaLiveEntryBaseFilter';

export interface KalturaLiveEntryFilterArgs  extends KalturaLiveEntryBaseFilterArgs {
    isLive? : KalturaNullableBoolean;
	isRecordedEntryIdEmpty? : KalturaNullableBoolean;
	hasMediaServerHostname? : string;
}


export class KalturaLiveEntryFilter extends KalturaLiveEntryBaseFilter {

    isLive : KalturaNullableBoolean;
	isRecordedEntryIdEmpty : KalturaNullableBoolean;
	hasMediaServerHostname : string;

    constructor(data? : KalturaLiveEntryFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryFilter' },
				isLive : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				isRecordedEntryIdEmpty : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				hasMediaServerHostname : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveEntryFilter',KalturaLiveEntryFilter);

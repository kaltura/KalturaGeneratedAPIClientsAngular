
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaEventCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    eventTypeEqual? : KalturaEventType;
	eventTypeIn? : string;
}


export class KalturaEventCuePointBaseFilter extends KalturaCuePointFilter {

    eventTypeEqual : KalturaEventType;
	eventTypeIn : string;

    constructor(data? : KalturaEventCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventCuePointBaseFilter' },
				eventTypeEqual : { type : 'es', subTypeConstructor : KalturaEventType, subType : 'KalturaEventType' },
				eventTypeIn : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventCuePointBaseFilter',KalturaEventCuePointBaseFilter);

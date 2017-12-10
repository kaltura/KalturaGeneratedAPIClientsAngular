
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointBaseFilter, KalturaCuePointBaseFilterArgs } from './KalturaCuePointBaseFilter';

export interface KalturaCuePointFilterArgs  extends KalturaCuePointBaseFilterArgs {
    freeText? : string;
	userIdEqualCurrent? : KalturaNullableBoolean;
	userIdCurrent? : KalturaNullableBoolean;
}


export class KalturaCuePointFilter extends KalturaCuePointBaseFilter {

    freeText : string;
	userIdEqualCurrent : KalturaNullableBoolean;
	userIdCurrent : KalturaNullableBoolean;

    constructor(data? : KalturaCuePointFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCuePointFilter' },
				freeText : { type : 's' },
				userIdEqualCurrent : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				userIdCurrent : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCuePointFilter',KalturaCuePointFilter);

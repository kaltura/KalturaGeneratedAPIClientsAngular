
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaCuePointFilter, KalturaCuePointFilterArgs } from './KalturaCuePointFilter';

export interface KalturaAdCuePointBaseFilterArgs  extends KalturaCuePointFilterArgs {
    protocolTypeEqual? : KalturaAdProtocolType;
	protocolTypeIn? : string;
	titleLike? : string;
	titleMultiLikeOr? : string;
	titleMultiLikeAnd? : string;
	endTimeGreaterThanOrEqual? : number;
	endTimeLessThanOrEqual? : number;
	durationGreaterThanOrEqual? : number;
	durationLessThanOrEqual? : number;
}


export class KalturaAdCuePointBaseFilter extends KalturaCuePointFilter {

    protocolTypeEqual : KalturaAdProtocolType;
	protocolTypeIn : string;
	titleLike : string;
	titleMultiLikeOr : string;
	titleMultiLikeAnd : string;
	endTimeGreaterThanOrEqual : number;
	endTimeLessThanOrEqual : number;
	durationGreaterThanOrEqual : number;
	durationLessThanOrEqual : number;

    constructor(data? : KalturaAdCuePointBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdCuePointBaseFilter' },
				protocolTypeEqual : { type : 'es', subTypeConstructor : KalturaAdProtocolType, subType : 'KalturaAdProtocolType' },
				protocolTypeIn : { type : 's' },
				titleLike : { type : 's' },
				titleMultiLikeOr : { type : 's' },
				titleMultiLikeAnd : { type : 's' },
				endTimeGreaterThanOrEqual : { type : 'n' },
				endTimeLessThanOrEqual : { type : 'n' },
				durationGreaterThanOrEqual : { type : 'n' },
				durationLessThanOrEqual : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdCuePointBaseFilter',KalturaAdCuePointBaseFilter);

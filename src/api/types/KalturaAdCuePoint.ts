
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaAdType } from './KalturaAdType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaAdCuePointArgs  extends KalturaCuePointArgs {
    protocolType? : KalturaAdProtocolType;
	sourceUrl? : string;
	adType? : KalturaAdType;
	title? : string;
	endTime? : number;
	duration? : number;
}


export class KalturaAdCuePoint extends KalturaCuePoint {

    protocolType : KalturaAdProtocolType;
	sourceUrl : string;
	adType : KalturaAdType;
	title : string;
	endTime : number;
	duration : number;

    constructor(data? : KalturaAdCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAdCuePoint' },
				protocolType : { type : 'es', subTypeConstructor : KalturaAdProtocolType, subType : 'KalturaAdProtocolType' },
				sourceUrl : { type : 's' },
				adType : { type : 'es', subTypeConstructor : KalturaAdType, subType : 'KalturaAdType' },
				title : { type : 's' },
				endTime : { type : 'n' },
				duration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAdCuePoint',KalturaAdCuePoint);

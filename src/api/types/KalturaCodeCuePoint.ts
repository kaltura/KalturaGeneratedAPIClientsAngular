
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaCodeCuePointArgs  extends KalturaCuePointArgs {
    code? : string;
	description? : string;
	endTime? : number;
}


export class KalturaCodeCuePoint extends KalturaCuePoint {

    code : string;
	description : string;
	endTime : number;
	readonly duration : number;

    constructor(data? : KalturaCodeCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCodeCuePoint' },
				code : { type : 's' },
				description : { type : 's' },
				endTime : { type : 'n' },
				duration : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCodeCuePoint',KalturaCodeCuePoint);

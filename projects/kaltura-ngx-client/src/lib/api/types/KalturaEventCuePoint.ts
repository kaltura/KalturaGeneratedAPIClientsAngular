
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventType } from './KalturaEventType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaEventCuePointArgs  extends KalturaCuePointArgs {
    eventType? : KalturaEventType;
}


export class KalturaEventCuePoint extends KalturaCuePoint {

    eventType : KalturaEventType;

    constructor(data? : KalturaEventCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventCuePoint' },
				eventType : { type : 'es', subTypeConstructor : KalturaEventType, subType : 'KalturaEventType' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventCuePoint'] = KalturaEventCuePoint;

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaCuePointListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaCuePointListResponse extends KalturaListResponse {

    readonly objects : KalturaCuePoint[];

    constructor(data? : KalturaCuePointListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCuePointListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCuePointListResponse',KalturaCuePointListResponse);

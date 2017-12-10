
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaScheduleEventListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaScheduleEventListResponse extends KalturaListResponse {

    readonly objects : KalturaScheduleEvent[];

    constructor(data? : KalturaScheduleEventListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaScheduleEventListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduleEvent, subType : 'KalturaScheduleEvent' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventListResponse',KalturaScheduleEventListResponse);

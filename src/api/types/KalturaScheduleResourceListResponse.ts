
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaScheduleResourceListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaScheduleResourceListResponse extends KalturaListResponse {

    readonly objects : KalturaScheduleResource[];

    constructor(data? : KalturaScheduleResourceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaScheduleResourceListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduleResource, subType : 'KalturaScheduleResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleResourceListResponse',KalturaScheduleResourceListResponse);

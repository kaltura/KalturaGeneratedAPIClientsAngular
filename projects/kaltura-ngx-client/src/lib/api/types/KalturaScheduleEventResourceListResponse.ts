
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaScheduleEventResourceListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaScheduleEventResourceListResponse extends KalturaListResponse {

    readonly objects : KalturaScheduleEventResource[];

    constructor(data? : KalturaScheduleEventResourceListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaScheduleEventResourceListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduleEventResource, subType : 'KalturaScheduleEventResource' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScheduleEventResourceListResponse'] = KalturaScheduleEventResourceListResponse;
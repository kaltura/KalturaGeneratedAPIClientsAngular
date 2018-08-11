
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';

export interface KalturaCameraScheduleResourceArgs  extends KalturaScheduleResourceArgs {
    streamUrl? : string;
}


export class KalturaCameraScheduleResource extends KalturaScheduleResource {

    streamUrl : string;

    constructor(data? : KalturaCameraScheduleResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCameraScheduleResource' },
				streamUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaCameraScheduleResource'] = KalturaCameraScheduleResource;
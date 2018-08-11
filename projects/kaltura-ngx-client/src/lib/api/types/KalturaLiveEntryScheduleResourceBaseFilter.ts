
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';

export interface KalturaLiveEntryScheduleResourceBaseFilterArgs  extends KalturaScheduleResourceFilterArgs {
    
}


export class KalturaLiveEntryScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {

    

    constructor(data? : KalturaLiveEntryScheduleResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryScheduleResourceBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryScheduleResourceBaseFilter'] = KalturaLiveEntryScheduleResourceBaseFilter;
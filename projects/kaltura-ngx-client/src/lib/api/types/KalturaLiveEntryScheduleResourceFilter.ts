
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaLiveEntryScheduleResourceBaseFilter, KalturaLiveEntryScheduleResourceBaseFilterArgs } from './KalturaLiveEntryScheduleResourceBaseFilter';

export interface KalturaLiveEntryScheduleResourceFilterArgs  extends KalturaLiveEntryScheduleResourceBaseFilterArgs {
    
}


export class KalturaLiveEntryScheduleResourceFilter extends KalturaLiveEntryScheduleResourceBaseFilter {

    

    constructor(data? : KalturaLiveEntryScheduleResourceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryScheduleResourceFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryScheduleResourceFilter'] = KalturaLiveEntryScheduleResourceFilter;
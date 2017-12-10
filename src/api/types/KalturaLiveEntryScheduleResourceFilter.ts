
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaLiveEntryScheduleResourceFilter',KalturaLiveEntryScheduleResourceFilter);

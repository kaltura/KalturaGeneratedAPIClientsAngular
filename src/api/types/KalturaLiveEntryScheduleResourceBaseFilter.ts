
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaLiveEntryScheduleResourceBaseFilter',KalturaLiveEntryScheduleResourceBaseFilter);


import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirtualScheduleEventBaseFilter, KalturaVirtualScheduleEventBaseFilterArgs } from './KalturaVirtualScheduleEventBaseFilter';

export interface KalturaVirtualScheduleEventFilterArgs  extends KalturaVirtualScheduleEventBaseFilterArgs {
    
}


export class KalturaVirtualScheduleEventFilter extends KalturaVirtualScheduleEventBaseFilter {

    

    constructor(data? : KalturaVirtualScheduleEventFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualScheduleEventFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualScheduleEventFilter'] = KalturaVirtualScheduleEventFilter;
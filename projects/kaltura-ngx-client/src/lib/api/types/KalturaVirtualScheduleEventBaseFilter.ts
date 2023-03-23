
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventFilter, KalturaScheduleEventFilterArgs } from './KalturaScheduleEventFilter';

export interface KalturaVirtualScheduleEventBaseFilterArgs  extends KalturaScheduleEventFilterArgs {
    
}


export class KalturaVirtualScheduleEventBaseFilter extends KalturaScheduleEventFilter {

    

    constructor(data? : KalturaVirtualScheduleEventBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualScheduleEventBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualScheduleEventBaseFilter'] = KalturaVirtualScheduleEventBaseFilter;
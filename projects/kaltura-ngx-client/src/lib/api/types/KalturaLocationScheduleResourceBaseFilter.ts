
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';

export interface KalturaLocationScheduleResourceBaseFilterArgs  extends KalturaScheduleResourceFilterArgs {
    
}


export class KalturaLocationScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {

    

    constructor(data? : KalturaLocationScheduleResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLocationScheduleResourceBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLocationScheduleResourceBaseFilter'] = KalturaLocationScheduleResourceBaseFilter;
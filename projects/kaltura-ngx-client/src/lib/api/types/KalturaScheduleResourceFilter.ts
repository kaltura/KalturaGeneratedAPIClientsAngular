
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleResourceBaseFilter, KalturaScheduleResourceBaseFilterArgs } from './KalturaScheduleResourceBaseFilter';

export interface KalturaScheduleResourceFilterArgs  extends KalturaScheduleResourceBaseFilterArgs {
    
}


export class KalturaScheduleResourceFilter extends KalturaScheduleResourceBaseFilter {

    

    constructor(data? : KalturaScheduleResourceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleResourceFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScheduleResourceFilter'] = KalturaScheduleResourceFilter;
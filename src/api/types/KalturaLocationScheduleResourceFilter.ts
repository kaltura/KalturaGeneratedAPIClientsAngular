
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLocationScheduleResourceBaseFilter, KalturaLocationScheduleResourceBaseFilterArgs } from './KalturaLocationScheduleResourceBaseFilter';

export interface KalturaLocationScheduleResourceFilterArgs  extends KalturaLocationScheduleResourceBaseFilterArgs {
    
}


export class KalturaLocationScheduleResourceFilter extends KalturaLocationScheduleResourceBaseFilter {

    

    constructor(data? : KalturaLocationScheduleResourceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLocationScheduleResourceFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLocationScheduleResourceFilter',KalturaLocationScheduleResourceFilter);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCameraScheduleResourceBaseFilter, KalturaCameraScheduleResourceBaseFilterArgs } from './KalturaCameraScheduleResourceBaseFilter';

export interface KalturaCameraScheduleResourceFilterArgs  extends KalturaCameraScheduleResourceBaseFilterArgs {
    
}


export class KalturaCameraScheduleResourceFilter extends KalturaCameraScheduleResourceBaseFilter {

    

    constructor(data? : KalturaCameraScheduleResourceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCameraScheduleResourceFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCameraScheduleResourceFilter',KalturaCameraScheduleResourceFilter);

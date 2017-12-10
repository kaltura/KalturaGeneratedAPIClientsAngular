
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleResourceFilter, KalturaScheduleResourceFilterArgs } from './KalturaScheduleResourceFilter';

export interface KalturaCameraScheduleResourceBaseFilterArgs  extends KalturaScheduleResourceFilterArgs {
    
}


export class KalturaCameraScheduleResourceBaseFilter extends KalturaScheduleResourceFilter {

    

    constructor(data? : KalturaCameraScheduleResourceBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCameraScheduleResourceBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCameraScheduleResourceBaseFilter',KalturaCameraScheduleResourceBaseFilter);

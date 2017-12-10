
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaScheduleResourceFilter',KalturaScheduleResourceFilter);

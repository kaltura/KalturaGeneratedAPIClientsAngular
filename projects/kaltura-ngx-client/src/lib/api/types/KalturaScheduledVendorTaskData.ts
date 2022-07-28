
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVendorTaskData, KalturaVendorTaskDataArgs } from './KalturaVendorTaskData';

export interface KalturaScheduledVendorTaskDataArgs  extends KalturaVendorTaskDataArgs {
    startDate? : Date;
	endDate? : Date;
	scheduledEventId? : number;
}


export class KalturaScheduledVendorTaskData extends KalturaVendorTaskData {

    startDate : Date;
	endDate : Date;
	scheduledEventId : number;

    constructor(data? : KalturaScheduledVendorTaskDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduledVendorTaskData' },
				startDate : { type : 'd' },
				endDate : { type : 'd' },
				scheduledEventId : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaScheduledVendorTaskData'] = KalturaScheduledVendorTaskData;
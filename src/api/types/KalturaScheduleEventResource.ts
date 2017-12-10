
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaScheduleEventResourceArgs  extends KalturaObjectBaseArgs {
    eventId? : number;
	resourceId? : number;
}


export class KalturaScheduleEventResource extends KalturaObjectBase {

    eventId : number;
	resourceId : number;
	readonly partnerId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;

    constructor(data? : KalturaScheduleEventResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaScheduleEventResource' },
				eventId : { type : 'n' },
				resourceId : { type : 'n' },
				partnerId : { type : 'n', readOnly : true },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduleEventResource',KalturaScheduleEventResource);

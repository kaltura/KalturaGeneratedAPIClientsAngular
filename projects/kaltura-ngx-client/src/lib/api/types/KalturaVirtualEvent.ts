
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaVirtualEventStatus } from './KalturaVirtualEventStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaVirtualEventArgs  extends KalturaObjectBaseArgs {
    name? : string;
	description? : string;
	tags? : string;
	attendeesGroupIds? : string;
	adminsGroupIds? : string;
	registrationScheduleEventId? : number;
	agendaScheduleEventId? : number;
	mainEventScheduleEventId? : number;
	deletionDueDate? : Date;
	registrationFormSchema? : string;
}


export class KalturaVirtualEvent extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	name : string;
	description : string;
	readonly status : KalturaVirtualEventStatus;
	tags : string;
	attendeesGroupIds : string;
	adminsGroupIds : string;
	registrationScheduleEventId : number;
	agendaScheduleEventId : number;
	mainEventScheduleEventId : number;
	readonly createdAt : Date;
	readonly updatedAt : Date;
	deletionDueDate : Date;
	registrationFormSchema : string;

    constructor(data? : KalturaVirtualEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaVirtualEvent' },
				id : { type : 'n', readOnly : true },
				partnerId : { type : 'n', readOnly : true },
				name : { type : 's' },
				description : { type : 's' },
				status : { type : 'en', readOnly : true, subTypeConstructor : KalturaVirtualEventStatus, subType : 'KalturaVirtualEventStatus' },
				tags : { type : 's' },
				attendeesGroupIds : { type : 's' },
				adminsGroupIds : { type : 's' },
				registrationScheduleEventId : { type : 'n' },
				agendaScheduleEventId : { type : 'n' },
				mainEventScheduleEventId : { type : 'n' },
				createdAt : { type : 'd', readOnly : true },
				updatedAt : { type : 'd', readOnly : true },
				deletionDueDate : { type : 'd' },
				registrationFormSchema : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaVirtualEvent'] = KalturaVirtualEvent;
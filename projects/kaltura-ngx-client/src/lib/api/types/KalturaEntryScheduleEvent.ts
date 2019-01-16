
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEvent, KalturaScheduleEventArgs } from './KalturaScheduleEvent';

export interface KalturaEntryScheduleEventArgs  extends KalturaScheduleEventArgs {
    templateEntryId? : string;
	entryIds? : string;
	categoryIds? : string;
}


export class KalturaEntryScheduleEvent extends KalturaScheduleEvent {

    templateEntryId : string;
	entryIds : string;
	categoryIds : string;
	readonly blackoutConflicts : KalturaScheduleEvent[];

    constructor(data? : KalturaEntryScheduleEventArgs)
    {
        super(data);
        if (typeof this.blackoutConflicts === 'undefined') this.blackoutConflicts = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryScheduleEvent' },
				templateEntryId : { type : 's' },
				entryIds : { type : 's' },
				categoryIds : { type : 's' },
				blackoutConflicts : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduleEvent, subType : 'KalturaScheduleEvent' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryScheduleEvent'] = KalturaEntryScheduleEvent;

import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

    constructor(data? : KalturaEntryScheduleEventArgs)
    {
        super(data);
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
				categoryIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEntryScheduleEvent',KalturaEntryScheduleEvent);

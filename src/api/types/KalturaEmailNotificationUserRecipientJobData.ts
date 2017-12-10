
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';

export interface KalturaEmailNotificationUserRecipientJobDataArgs  extends KalturaEmailNotificationRecipientJobDataArgs {
    filter? : KalturaUserFilter;
}


export class KalturaEmailNotificationUserRecipientJobData extends KalturaEmailNotificationRecipientJobData {

    filter : KalturaUserFilter;

    constructor(data? : KalturaEmailNotificationUserRecipientJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationUserRecipientJobData' },
				filter : { type : 'o', subTypeConstructor : KalturaUserFilter, subType : 'KalturaUserFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationUserRecipientJobData',KalturaEmailNotificationUserRecipientJobData);

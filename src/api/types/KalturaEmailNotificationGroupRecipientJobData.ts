
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';

export interface KalturaEmailNotificationGroupRecipientJobDataArgs  extends KalturaEmailNotificationRecipientJobDataArgs {
    groupId? : string;
}


export class KalturaEmailNotificationGroupRecipientJobData extends KalturaEmailNotificationRecipientJobData {

    groupId : string;

    constructor(data? : KalturaEmailNotificationGroupRecipientJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationGroupRecipientJobData' },
				groupId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationGroupRecipientJobData',KalturaEmailNotificationGroupRecipientJobData);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEmailNotificationRecipientJobData, KalturaEmailNotificationRecipientJobDataArgs } from './KalturaEmailNotificationRecipientJobData';

export interface KalturaEmailNotificationStaticRecipientJobDataArgs  extends KalturaEmailNotificationRecipientJobDataArgs {
    emailRecipients? : KalturaKeyValue[];
}


export class KalturaEmailNotificationStaticRecipientJobData extends KalturaEmailNotificationRecipientJobData {

    emailRecipients : KalturaKeyValue[];

    constructor(data? : KalturaEmailNotificationStaticRecipientJobDataArgs)
    {
        super(data);
        if (typeof this.emailRecipients === 'undefined') this.emailRecipients = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationStaticRecipientJobData' },
				emailRecipients : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationStaticRecipientJobData',KalturaEmailNotificationStaticRecipientJobData);

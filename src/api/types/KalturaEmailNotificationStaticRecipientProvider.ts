
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationRecipient } from './KalturaEmailNotificationRecipient';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationStaticRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    emailRecipients? : KalturaEmailNotificationRecipient[];
}


export class KalturaEmailNotificationStaticRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    emailRecipients : KalturaEmailNotificationRecipient[];

    constructor(data? : KalturaEmailNotificationStaticRecipientProviderArgs)
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
                objectType : { type : 'c', default : 'KalturaEmailNotificationStaticRecipientProvider' },
				emailRecipients : { type : 'a', subTypeConstructor : KalturaEmailNotificationRecipient, subType : 'KalturaEmailNotificationRecipient' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationStaticRecipientProvider',KalturaEmailNotificationStaticRecipientProvider);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationRecipientProviderType } from './KalturaEmailNotificationRecipientProviderType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailNotificationRecipientJobDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEmailNotificationRecipientJobData extends KalturaObjectBase {

    readonly providerType : KalturaEmailNotificationRecipientProviderType;

    constructor(data? : KalturaEmailNotificationRecipientJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationRecipientJobData' },
				providerType : { type : 'es', readOnly : true, subTypeConstructor : KalturaEmailNotificationRecipientProviderType, subType : 'KalturaEmailNotificationRecipientProviderType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationRecipientJobData',KalturaEmailNotificationRecipientJobData);

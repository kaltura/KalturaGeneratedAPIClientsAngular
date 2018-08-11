
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
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

typesMappingStorage['KalturaEmailNotificationRecipientJobData'] = KalturaEmailNotificationRecipientJobData;
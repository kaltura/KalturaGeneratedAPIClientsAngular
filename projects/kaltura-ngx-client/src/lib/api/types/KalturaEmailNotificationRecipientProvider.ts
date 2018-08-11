
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaEmailNotificationRecipientProviderArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaEmailNotificationRecipientProvider extends KalturaObjectBase {

    

    constructor(data? : KalturaEmailNotificationRecipientProviderArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationRecipientProvider' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationRecipientProvider'] = KalturaEmailNotificationRecipientProvider;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';

export interface KalturaPushNotificationTemplateBaseFilterArgs  extends KalturaEventNotificationTemplateFilterArgs {
    
}


export class KalturaPushNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {

    

    constructor(data? : KalturaPushNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPushNotificationTemplateBaseFilter'] = KalturaPushNotificationTemplateBaseFilter;
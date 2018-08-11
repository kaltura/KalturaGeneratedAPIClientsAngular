
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPushNotificationTemplateBaseFilter, KalturaPushNotificationTemplateBaseFilterArgs } from './KalturaPushNotificationTemplateBaseFilter';

export interface KalturaPushNotificationTemplateFilterArgs  extends KalturaPushNotificationTemplateBaseFilterArgs {
    
}


export class KalturaPushNotificationTemplateFilter extends KalturaPushNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaPushNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPushNotificationTemplateFilter'] = KalturaPushNotificationTemplateFilter;
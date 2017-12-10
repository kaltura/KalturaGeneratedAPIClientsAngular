
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaPushNotificationTemplateFilter',KalturaPushNotificationTemplateFilter);

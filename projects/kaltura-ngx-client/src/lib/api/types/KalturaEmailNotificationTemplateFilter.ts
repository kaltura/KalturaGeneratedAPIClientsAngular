
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEmailNotificationTemplateBaseFilter, KalturaEmailNotificationTemplateBaseFilterArgs } from './KalturaEmailNotificationTemplateBaseFilter';

export interface KalturaEmailNotificationTemplateFilterArgs  extends KalturaEmailNotificationTemplateBaseFilterArgs {
    
}


export class KalturaEmailNotificationTemplateFilter extends KalturaEmailNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaEmailNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationTemplateFilter'] = KalturaEmailNotificationTemplateFilter;
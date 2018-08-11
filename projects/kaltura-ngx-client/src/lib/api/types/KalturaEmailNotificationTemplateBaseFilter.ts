
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';

export interface KalturaEmailNotificationTemplateBaseFilterArgs  extends KalturaEventNotificationTemplateFilterArgs {
    
}


export class KalturaEmailNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {

    

    constructor(data? : KalturaEmailNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationTemplateBaseFilter'] = KalturaEmailNotificationTemplateBaseFilter;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateBaseFilter, KalturaEventNotificationTemplateBaseFilterArgs } from './KalturaEventNotificationTemplateBaseFilter';

export interface KalturaEventNotificationTemplateFilterArgs  extends KalturaEventNotificationTemplateBaseFilterArgs {
    
}


export class KalturaEventNotificationTemplateFilter extends KalturaEventNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaEventNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEventNotificationTemplateFilter'] = KalturaEventNotificationTemplateFilter;
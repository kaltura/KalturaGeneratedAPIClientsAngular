
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';

export interface KalturaBusinessProcessNotificationTemplateBaseFilterArgs  extends KalturaEventNotificationTemplateFilterArgs {
    
}


export class KalturaBusinessProcessNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {

    

    constructor(data? : KalturaBusinessProcessNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBusinessProcessNotificationTemplateBaseFilter'] = KalturaBusinessProcessNotificationTemplateBaseFilter;
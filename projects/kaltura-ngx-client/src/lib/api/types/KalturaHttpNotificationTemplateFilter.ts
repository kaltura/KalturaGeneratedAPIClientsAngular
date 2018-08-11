
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaHttpNotificationTemplateBaseFilter, KalturaHttpNotificationTemplateBaseFilterArgs } from './KalturaHttpNotificationTemplateBaseFilter';

export interface KalturaHttpNotificationTemplateFilterArgs  extends KalturaHttpNotificationTemplateBaseFilterArgs {
    
}


export class KalturaHttpNotificationTemplateFilter extends KalturaHttpNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaHttpNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaHttpNotificationTemplateFilter'] = KalturaHttpNotificationTemplateFilter;
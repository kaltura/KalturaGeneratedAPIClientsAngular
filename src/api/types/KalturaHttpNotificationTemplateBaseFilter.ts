
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplateFilter, KalturaEventNotificationTemplateFilterArgs } from './KalturaEventNotificationTemplateFilter';

export interface KalturaHttpNotificationTemplateBaseFilterArgs  extends KalturaEventNotificationTemplateFilterArgs {
    
}


export class KalturaHttpNotificationTemplateBaseFilter extends KalturaEventNotificationTemplateFilter {

    

    constructor(data? : KalturaHttpNotificationTemplateBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHttpNotificationTemplateBaseFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHttpNotificationTemplateBaseFilter',KalturaHttpNotificationTemplateBaseFilter);

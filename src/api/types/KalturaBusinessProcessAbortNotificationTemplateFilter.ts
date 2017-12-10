
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessAbortNotificationTemplateBaseFilter, KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessAbortNotificationTemplateBaseFilter';

export interface KalturaBusinessProcessAbortNotificationTemplateFilterArgs  extends KalturaBusinessProcessAbortNotificationTemplateBaseFilterArgs {
    
}


export class KalturaBusinessProcessAbortNotificationTemplateFilter extends KalturaBusinessProcessAbortNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaBusinessProcessAbortNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessAbortNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessAbortNotificationTemplateFilter',KalturaBusinessProcessAbortNotificationTemplateFilter);

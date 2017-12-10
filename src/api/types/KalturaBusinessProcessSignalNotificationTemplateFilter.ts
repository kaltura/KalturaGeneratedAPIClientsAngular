
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessSignalNotificationTemplateBaseFilter, KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs } from './KalturaBusinessProcessSignalNotificationTemplateBaseFilter';

export interface KalturaBusinessProcessSignalNotificationTemplateFilterArgs  extends KalturaBusinessProcessSignalNotificationTemplateBaseFilterArgs {
    
}


export class KalturaBusinessProcessSignalNotificationTemplateFilter extends KalturaBusinessProcessSignalNotificationTemplateBaseFilter {

    

    constructor(data? : KalturaBusinessProcessSignalNotificationTemplateFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessSignalNotificationTemplateFilter' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessSignalNotificationTemplateFilter',KalturaBusinessProcessSignalNotificationTemplateFilter);

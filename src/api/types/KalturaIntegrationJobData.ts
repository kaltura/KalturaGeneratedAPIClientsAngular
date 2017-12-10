
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaIntegrationProviderType } from './KalturaIntegrationProviderType';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
import { KalturaIntegrationTriggerType } from './KalturaIntegrationTriggerType';
import { KalturaIntegrationJobTriggerData } from './KalturaIntegrationJobTriggerData';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaIntegrationJobDataArgs  extends KalturaJobDataArgs {
    providerType? : KalturaIntegrationProviderType;
	providerData? : KalturaIntegrationJobProviderData;
	triggerType? : KalturaIntegrationTriggerType;
	triggerData? : KalturaIntegrationJobTriggerData;
}


export class KalturaIntegrationJobData extends KalturaJobData {

    readonly callbackNotificationUrl : string;
	providerType : KalturaIntegrationProviderType;
	providerData : KalturaIntegrationJobProviderData;
	triggerType : KalturaIntegrationTriggerType;
	triggerData : KalturaIntegrationJobTriggerData;

    constructor(data? : KalturaIntegrationJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaIntegrationJobData' },
				callbackNotificationUrl : { type : 's', readOnly : true },
				providerType : { type : 'es', subTypeConstructor : KalturaIntegrationProviderType, subType : 'KalturaIntegrationProviderType' },
				providerData : { type : 'o', subTypeConstructor : KalturaIntegrationJobProviderData, subType : 'KalturaIntegrationJobProviderData' },
				triggerType : { type : 'es', subTypeConstructor : KalturaIntegrationTriggerType, subType : 'KalturaIntegrationTriggerType' },
				triggerData : { type : 'o', subTypeConstructor : KalturaIntegrationJobTriggerData, subType : 'KalturaIntegrationJobTriggerData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaIntegrationJobData',KalturaIntegrationJobData);

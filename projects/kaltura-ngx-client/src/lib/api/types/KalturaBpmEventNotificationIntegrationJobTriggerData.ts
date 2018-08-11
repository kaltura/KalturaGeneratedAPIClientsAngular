
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationJobTriggerData, KalturaIntegrationJobTriggerDataArgs } from './KalturaIntegrationJobTriggerData';

export interface KalturaBpmEventNotificationIntegrationJobTriggerDataArgs  extends KalturaIntegrationJobTriggerDataArgs {
    templateId? : number;
	businessProcessId? : string;
	caseId? : string;
}


export class KalturaBpmEventNotificationIntegrationJobTriggerData extends KalturaIntegrationJobTriggerData {

    templateId : number;
	businessProcessId : string;
	caseId : string;

    constructor(data? : KalturaBpmEventNotificationIntegrationJobTriggerDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBpmEventNotificationIntegrationJobTriggerData' },
				templateId : { type : 'n' },
				businessProcessId : { type : 's' },
				caseId : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaBpmEventNotificationIntegrationJobTriggerData'] = KalturaBpmEventNotificationIntegrationJobTriggerData;

import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaIntegrationJobData } from './KalturaIntegrationJobData';
import { KalturaBatchJobObjectType } from './KalturaBatchJobObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface IntegrationDispatchActionArgs  extends KalturaRequestArgs {
    data : KalturaIntegrationJobData;
	objectType : KalturaBatchJobObjectType;
	objectId : string;
}

/**
 * Build request payload for service 'integration' action 'dispatch'.
 *
 * Usage: Dispatch integration task
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class IntegrationDispatchAction extends KalturaRequest<number> {

    data : KalturaIntegrationJobData;
	objectType : KalturaBatchJobObjectType;
	objectId : string;

    constructor(data : IntegrationDispatchActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'integration_integration' },
				action : { type : 'c', default : 'dispatch' },
				data : { type : 'o', subTypeConstructor : KalturaIntegrationJobData, subType : 'KalturaIntegrationJobData' },
				objectType : { type : 'es', subTypeConstructor : KalturaBatchJobObjectType, subType : 'KalturaBatchJobObjectType' },
				objectId : { type : 's' }
            }
        );
        return result;
    }
}


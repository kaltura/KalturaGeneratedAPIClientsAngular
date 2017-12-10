
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBusinessProcessCase } from './KalturaBusinessProcessCase';

import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BusinessProcessCaseListActionArgs  extends KalturaRequestArgs {
    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
}

/**
 * Build request payload for service 'businessProcessCase' action 'list'.
 *
 * Usage: list business-process cases
 *
 * Server response type:         KalturaBusinessProcessCase[]
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class BusinessProcessCaseListAction extends KalturaRequest<KalturaBusinessProcessCase[]> {

    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;

    constructor(data : BusinessProcessCaseListActionArgs)
    {
        super(data, {responseType : 'a', responseSubType : 'KalturaBusinessProcessCase', responseConstructor : KalturaBusinessProcessCase  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'businessprocessnotification_businessprocesscase' },
				action : { type : 'c', default : 'list' },
				objectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' },
				objectId : { type : 's' }
            }
        );
        return result;
    }
}


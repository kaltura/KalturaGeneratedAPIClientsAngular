
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaFileRequest, KalturaFileRequestArgs } from '../kaltura-file-request';

export interface BusinessProcessCaseServeDiagramActionArgs  extends KalturaFileRequestArgs {
    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;
}

/**
 * Build request payload for service 'businessProcessCase' action 'serveDiagram'.
 *
 * Usage: Server business-process case diagram
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class BusinessProcessCaseServeDiagramAction extends KalturaFileRequest {

    objectType : KalturaEventNotificationEventObjectType;
	objectId : string;
	businessProcessStartNotificationTemplateId : number;

    constructor(data : BusinessProcessCaseServeDiagramActionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'businessprocessnotification_businessprocesscase' },
				action : { type : 'c', default : 'serveDiagram' },
				objectType : { type : 'es', subTypeConstructor : KalturaEventNotificationEventObjectType, subType : 'KalturaEventNotificationEventObjectType' },
				objectId : { type : 's' },
				businessProcessStartNotificationTemplateId : { type : 'n' }
            }
        );
        return result;
    }
}


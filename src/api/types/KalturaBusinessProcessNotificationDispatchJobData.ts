
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBusinessProcessServer } from './KalturaBusinessProcessServer';
import { KalturaEventNotificationDispatchJobData, KalturaEventNotificationDispatchJobDataArgs } from './KalturaEventNotificationDispatchJobData';

export interface KalturaBusinessProcessNotificationDispatchJobDataArgs  extends KalturaEventNotificationDispatchJobDataArgs {
    server? : KalturaBusinessProcessServer;
	caseId? : string;
}


export class KalturaBusinessProcessNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {

    server : KalturaBusinessProcessServer;
	caseId : string;

    constructor(data? : KalturaBusinessProcessNotificationDispatchJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessNotificationDispatchJobData' },
				server : { type : 'o', subTypeConstructor : KalturaBusinessProcessServer, subType : 'KalturaBusinessProcessServer' },
				caseId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessNotificationDispatchJobData',KalturaBusinessProcessNotificationDispatchJobData);

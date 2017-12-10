
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaEventNotificationDispatchJobDataArgs  extends KalturaJobDataArgs {
    templateId? : number;
	contentParameters? : KalturaKeyValue[];
}


export class KalturaEventNotificationDispatchJobData extends KalturaJobData {

    templateId : number;
	contentParameters : KalturaKeyValue[];

    constructor(data? : KalturaEventNotificationDispatchJobDataArgs)
    {
        super(data);
        if (typeof this.contentParameters === 'undefined') this.contentParameters = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationDispatchJobData' },
				templateId : { type : 'n' },
				contentParameters : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationDispatchJobData',KalturaEventNotificationDispatchJobData);

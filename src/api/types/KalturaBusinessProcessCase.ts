
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBusinessProcessCaseArgs  extends KalturaObjectBaseArgs {
    id? : string;
	businessProcessId? : string;
	businessProcessStartNotificationTemplateId? : number;
	suspended? : boolean;
	activityId? : string;
}


export class KalturaBusinessProcessCase extends KalturaObjectBase {

    id : string;
	businessProcessId : string;
	businessProcessStartNotificationTemplateId : number;
	suspended : boolean;
	activityId : string;

    constructor(data? : KalturaBusinessProcessCaseArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBusinessProcessCase' },
				id : { type : 's' },
				businessProcessId : { type : 's' },
				businessProcessStartNotificationTemplateId : { type : 'n' },
				suspended : { type : 'b' },
				activityId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBusinessProcessCase',KalturaBusinessProcessCase);

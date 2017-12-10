
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPushNotificationDataArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaPushNotificationData extends KalturaObjectBase {

    readonly queueName : string;
	readonly queueKey : string;
	readonly url : string;

    constructor(data? : KalturaPushNotificationDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationData' },
				queueName : { type : 's', readOnly : true },
				queueKey : { type : 's', readOnly : true },
				url : { type : 's', readOnly : true }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPushNotificationData',KalturaPushNotificationData);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaClientNotificationArgs  extends KalturaObjectBaseArgs {
    url? : string;
	data? : string;
}


export class KalturaClientNotification extends KalturaObjectBase {

    url : string;
	data : string;

    constructor(data? : KalturaClientNotificationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClientNotification' },
				url : { type : 's' },
				data : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClientNotification',KalturaClientNotification);

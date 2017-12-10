
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaMailNotificationObjectTaskArgs  extends KalturaObjectTaskArgs {
    mailTo? : string;
	sender? : string;
	subject? : string;
	message? : string;
	footer? : string;
	link? : string;
	sendToUsers? : boolean;
}


export class KalturaMailNotificationObjectTask extends KalturaObjectTask {

    mailTo : string;
	sender : string;
	subject : string;
	message : string;
	footer : string;
	link : string;
	sendToUsers : boolean;

    constructor(data? : KalturaMailNotificationObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMailNotificationObjectTask' },
				mailTo : { type : 's' },
				sender : { type : 's' },
				subject : { type : 's' },
				message : { type : 's' },
				footer : { type : 's' },
				link : { type : 's' },
				sendToUsers : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMailNotificationObjectTask',KalturaMailNotificationObjectTask);

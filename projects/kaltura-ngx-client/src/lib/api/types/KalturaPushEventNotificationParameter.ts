
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';

export interface KalturaPushEventNotificationParameterArgs  extends KalturaEventNotificationParameterArgs {
    queueKeyToken? : string;
}


export class KalturaPushEventNotificationParameter extends KalturaEventNotificationParameter {

    queueKeyToken : string;

    constructor(data? : KalturaPushEventNotificationParameterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushEventNotificationParameter' },
				queueKeyToken : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPushEventNotificationParameter'] = KalturaPushEventNotificationParameter;
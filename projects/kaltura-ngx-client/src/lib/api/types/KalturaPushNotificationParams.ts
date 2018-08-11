
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPushNotificationParamsArgs  extends KalturaObjectBaseArgs {
    userParams? : KalturaPushEventNotificationParameter[];
}


export class KalturaPushNotificationParams extends KalturaObjectBase {

    userParams : KalturaPushEventNotificationParameter[];

    constructor(data? : KalturaPushNotificationParamsArgs)
    {
        super(data);
        if (typeof this.userParams === 'undefined') this.userParams = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPushNotificationParams' },
				userParams : { type : 'a', subTypeConstructor : KalturaPushEventNotificationParameter, subType : 'KalturaPushEventNotificationParameter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPushNotificationParams'] = KalturaPushNotificationParams;

import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationParameter, KalturaEventNotificationParameterArgs } from './KalturaEventNotificationParameter';

export interface KalturaEmailNotificationParameterArgs  extends KalturaEventNotificationParameterArgs {
    
}


export class KalturaEmailNotificationParameter extends KalturaEventNotificationParameter {

    

    constructor(data? : KalturaEmailNotificationParameterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEmailNotificationParameter' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEmailNotificationParameter'] = KalturaEmailNotificationParameter;
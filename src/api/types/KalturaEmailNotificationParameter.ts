
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
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

KalturaTypesFactory.registerType('KalturaEmailNotificationParameter',KalturaEmailNotificationParameter);

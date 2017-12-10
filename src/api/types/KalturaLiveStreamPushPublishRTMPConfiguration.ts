
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaLiveStreamPushPublishConfiguration, KalturaLiveStreamPushPublishConfigurationArgs } from './KalturaLiveStreamPushPublishConfiguration';

export interface KalturaLiveStreamPushPublishRTMPConfigurationArgs  extends KalturaLiveStreamPushPublishConfigurationArgs {
    userId? : string;
	password? : string;
	streamName? : string;
	applicationName? : string;
}


export class KalturaLiveStreamPushPublishRTMPConfiguration extends KalturaLiveStreamPushPublishConfiguration {

    userId : string;
	password : string;
	streamName : string;
	applicationName : string;

    constructor(data? : KalturaLiveStreamPushPublishRTMPConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamPushPublishRTMPConfiguration' },
				userId : { type : 's' },
				password : { type : 's' },
				streamName : { type : 's' },
				applicationName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamPushPublishRTMPConfiguration',KalturaLiveStreamPushPublishRTMPConfiguration);


import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamPushPublishConfigurationArgs  extends KalturaObjectBaseArgs {
    publishUrl? : string;
	backupPublishUrl? : string;
	port? : string;
}


export class KalturaLiveStreamPushPublishConfiguration extends KalturaObjectBase {

    publishUrl : string;
	backupPublishUrl : string;
	port : string;

    constructor(data? : KalturaLiveStreamPushPublishConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamPushPublishConfiguration' },
				publishUrl : { type : 's' },
				backupPublishUrl : { type : 's' },
				port : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveStreamPushPublishConfiguration'] = KalturaLiveStreamPushPublishConfiguration;
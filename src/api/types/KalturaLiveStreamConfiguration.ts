
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamConfigurationArgs  extends KalturaObjectBaseArgs {
    protocol? : KalturaPlaybackProtocol;
	url? : string;
	publishUrl? : string;
	backupUrl? : string;
	streamName? : string;
}


export class KalturaLiveStreamConfiguration extends KalturaObjectBase {

    protocol : KalturaPlaybackProtocol;
	url : string;
	publishUrl : string;
	backupUrl : string;
	streamName : string;

    constructor(data? : KalturaLiveStreamConfigurationArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamConfiguration' },
				protocol : { type : 'es', subTypeConstructor : KalturaPlaybackProtocol, subType : 'KalturaPlaybackProtocol' },
				url : { type : 's' },
				publishUrl : { type : 's' },
				backupUrl : { type : 's' },
				streamName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamConfiguration',KalturaLiveStreamConfiguration);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamParamsArgs  extends KalturaObjectBaseArgs {
    bitrate? : number;
	flavorId? : string;
	width? : number;
	height? : number;
	codec? : string;
	frameRate? : number;
	keyFrameInterval? : number;
	language? : string;
}


export class KalturaLiveStreamParams extends KalturaObjectBase {

    bitrate : number;
	flavorId : string;
	width : number;
	height : number;
	codec : string;
	frameRate : number;
	keyFrameInterval : number;
	language : string;

    constructor(data? : KalturaLiveStreamParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamParams' },
				bitrate : { type : 'n' },
				flavorId : { type : 's' },
				width : { type : 'n' },
				height : { type : 'n' },
				codec : { type : 's' },
				frameRate : { type : 'n' },
				keyFrameInterval : { type : 'n' },
				language : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamParams',KalturaLiveStreamParams);

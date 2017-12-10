
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveStreamBitrateArgs  extends KalturaObjectBaseArgs {
    bitrate? : number;
	width? : number;
	height? : number;
	tags? : string;
}


export class KalturaLiveStreamBitrate extends KalturaObjectBase {

    bitrate : number;
	width : number;
	height : number;
	tags : string;

    constructor(data? : KalturaLiveStreamBitrateArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveStreamBitrate' },
				bitrate : { type : 'n' },
				width : { type : 'n' },
				height : { type : 'n' },
				tags : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLiveStreamBitrate',KalturaLiveStreamBitrate);

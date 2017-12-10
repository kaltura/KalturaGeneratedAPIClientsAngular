
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBitRateMode } from './KalturaBitRateMode';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaMediaInfoArgs  extends KalturaObjectBaseArgs {
    flavorAssetId? : string;
	fileSize? : number;
	containerFormat? : string;
	containerId? : string;
	containerProfile? : string;
	containerDuration? : number;
	containerBitRate? : number;
	videoFormat? : string;
	videoCodecId? : string;
	videoDuration? : number;
	videoBitRate? : number;
	videoBitRateMode? : KalturaBitRateMode;
	videoWidth? : number;
	videoHeight? : number;
	videoFrameRate? : number;
	videoDar? : number;
	videoRotation? : number;
	audioFormat? : string;
	audioCodecId? : string;
	audioDuration? : number;
	audioBitRate? : number;
	audioBitRateMode? : KalturaBitRateMode;
	audioChannels? : number;
	audioSamplingRate? : number;
	audioResolution? : number;
	writingLib? : string;
	rawData? : string;
	multiStreamInfo? : string;
	scanType? : number;
	multiStream? : string;
	isFastStart? : number;
	contentStreams? : string;
	complexityValue? : number;
	maxGOP? : number;
}


export class KalturaMediaInfo extends KalturaObjectBase {

    readonly id : number;
	flavorAssetId : string;
	fileSize : number;
	containerFormat : string;
	containerId : string;
	containerProfile : string;
	containerDuration : number;
	containerBitRate : number;
	videoFormat : string;
	videoCodecId : string;
	videoDuration : number;
	videoBitRate : number;
	videoBitRateMode : KalturaBitRateMode;
	videoWidth : number;
	videoHeight : number;
	videoFrameRate : number;
	videoDar : number;
	videoRotation : number;
	audioFormat : string;
	audioCodecId : string;
	audioDuration : number;
	audioBitRate : number;
	audioBitRateMode : KalturaBitRateMode;
	audioChannels : number;
	audioSamplingRate : number;
	audioResolution : number;
	writingLib : string;
	rawData : string;
	multiStreamInfo : string;
	scanType : number;
	multiStream : string;
	isFastStart : number;
	contentStreams : string;
	complexityValue : number;
	maxGOP : number;

    constructor(data? : KalturaMediaInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaInfo' },
				id : { type : 'n', readOnly : true },
				flavorAssetId : { type : 's' },
				fileSize : { type : 'n' },
				containerFormat : { type : 's' },
				containerId : { type : 's' },
				containerProfile : { type : 's' },
				containerDuration : { type : 'n' },
				containerBitRate : { type : 'n' },
				videoFormat : { type : 's' },
				videoCodecId : { type : 's' },
				videoDuration : { type : 'n' },
				videoBitRate : { type : 'n' },
				videoBitRateMode : { type : 'en', subTypeConstructor : KalturaBitRateMode, subType : 'KalturaBitRateMode' },
				videoWidth : { type : 'n' },
				videoHeight : { type : 'n' },
				videoFrameRate : { type : 'n' },
				videoDar : { type : 'n' },
				videoRotation : { type : 'n' },
				audioFormat : { type : 's' },
				audioCodecId : { type : 's' },
				audioDuration : { type : 'n' },
				audioBitRate : { type : 'n' },
				audioBitRateMode : { type : 'en', subTypeConstructor : KalturaBitRateMode, subType : 'KalturaBitRateMode' },
				audioChannels : { type : 'n' },
				audioSamplingRate : { type : 'n' },
				audioResolution : { type : 'n' },
				writingLib : { type : 's' },
				rawData : { type : 's' },
				multiStreamInfo : { type : 's' },
				scanType : { type : 'n' },
				multiStream : { type : 's' },
				isFastStart : { type : 'n' },
				contentStreams : { type : 's' },
				complexityValue : { type : 'n' },
				maxGOP : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMediaInfo',KalturaMediaInfo);

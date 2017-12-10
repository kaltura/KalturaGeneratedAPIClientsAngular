
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaVideoCodec } from './KalturaVideoCodec';
import { KalturaAudioCodec } from './KalturaAudioCodec';
import { KalturaContainerFormat } from './KalturaContainerFormat';
import { KalturaAssetParams, KalturaAssetParamsArgs } from './KalturaAssetParams';

export interface KalturaFlavorParamsArgs  extends KalturaAssetParamsArgs {
    videoCodec? : KalturaVideoCodec;
	videoBitrate? : number;
	audioCodec? : KalturaAudioCodec;
	audioBitrate? : number;
	audioChannels? : number;
	audioSampleRate? : number;
	width? : number;
	height? : number;
	frameRate? : number;
	gopSize? : number;
	conversionEngines? : string;
	conversionEnginesExtraParams? : string;
	twoPass? : boolean;
	deinterlice? : number;
	rotate? : number;
	operators? : string;
	engineVersion? : number;
	format? : KalturaContainerFormat;
	aspectRatioProcessingMode? : number;
	forceFrameToMultiplication16? : number;
	isGopInSec? : number;
	isAvoidVideoShrinkFramesizeToSource? : number;
	isAvoidVideoShrinkBitrateToSource? : number;
	isVideoFrameRateForLowBrAppleHls? : number;
	multiStream? : string;
	anamorphicPixels? : number;
	isAvoidForcedKeyFrames? : number;
	forcedKeyFramesMode? : number;
	isCropIMX? : number;
	optimizationPolicy? : number;
	maxFrameRate? : number;
	videoConstantBitrate? : number;
	videoBitrateTolerance? : number;
	watermarkData? : string;
	subtitlesData? : string;
	isEncrypted? : number;
	contentAwareness? : number;
	chunkedEncodeMode? : number;
	clipOffset? : number;
	clipDuration? : number;
}


export class KalturaFlavorParams extends KalturaAssetParams {

    videoCodec : KalturaVideoCodec;
	videoBitrate : number;
	audioCodec : KalturaAudioCodec;
	audioBitrate : number;
	audioChannels : number;
	audioSampleRate : number;
	width : number;
	height : number;
	frameRate : number;
	gopSize : number;
	conversionEngines : string;
	conversionEnginesExtraParams : string;
	twoPass : boolean;
	deinterlice : number;
	rotate : number;
	operators : string;
	engineVersion : number;
	format : KalturaContainerFormat;
	aspectRatioProcessingMode : number;
	forceFrameToMultiplication16 : number;
	isGopInSec : number;
	isAvoidVideoShrinkFramesizeToSource : number;
	isAvoidVideoShrinkBitrateToSource : number;
	isVideoFrameRateForLowBrAppleHls : number;
	multiStream : string;
	anamorphicPixels : number;
	isAvoidForcedKeyFrames : number;
	forcedKeyFramesMode : number;
	isCropIMX : number;
	optimizationPolicy : number;
	maxFrameRate : number;
	videoConstantBitrate : number;
	videoBitrateTolerance : number;
	watermarkData : string;
	subtitlesData : string;
	isEncrypted : number;
	contentAwareness : number;
	chunkedEncodeMode : number;
	clipOffset : number;
	clipDuration : number;

    constructor(data? : KalturaFlavorParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFlavorParams' },
				videoCodec : { type : 'es', subTypeConstructor : KalturaVideoCodec, subType : 'KalturaVideoCodec' },
				videoBitrate : { type : 'n' },
				audioCodec : { type : 'es', subTypeConstructor : KalturaAudioCodec, subType : 'KalturaAudioCodec' },
				audioBitrate : { type : 'n' },
				audioChannels : { type : 'n' },
				audioSampleRate : { type : 'n' },
				width : { type : 'n' },
				height : { type : 'n' },
				frameRate : { type : 'n' },
				gopSize : { type : 'n' },
				conversionEngines : { type : 's' },
				conversionEnginesExtraParams : { type : 's' },
				twoPass : { type : 'b' },
				deinterlice : { type : 'n' },
				rotate : { type : 'n' },
				operators : { type : 's' },
				engineVersion : { type : 'n' },
				format : { type : 'es', subTypeConstructor : KalturaContainerFormat, subType : 'KalturaContainerFormat' },
				aspectRatioProcessingMode : { type : 'n' },
				forceFrameToMultiplication16 : { type : 'n' },
				isGopInSec : { type : 'n' },
				isAvoidVideoShrinkFramesizeToSource : { type : 'n' },
				isAvoidVideoShrinkBitrateToSource : { type : 'n' },
				isVideoFrameRateForLowBrAppleHls : { type : 'n' },
				multiStream : { type : 's' },
				anamorphicPixels : { type : 'n' },
				isAvoidForcedKeyFrames : { type : 'n' },
				forcedKeyFramesMode : { type : 'n' },
				isCropIMX : { type : 'n' },
				optimizationPolicy : { type : 'n' },
				maxFrameRate : { type : 'n' },
				videoConstantBitrate : { type : 'n' },
				videoBitrateTolerance : { type : 'n' },
				watermarkData : { type : 's' },
				subtitlesData : { type : 's' },
				isEncrypted : { type : 'n' },
				contentAwareness : { type : 'n' },
				chunkedEncodeMode : { type : 'n' },
				clipOffset : { type : 'n' },
				clipDuration : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFlavorParams',KalturaFlavorParams);

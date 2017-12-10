
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyAnalogVideoOPL } from './KalturaPlayReadyAnalogVideoOPL';
import { KalturaPlayReadyAnalogVideoOPIdHolder } from './KalturaPlayReadyAnalogVideoOPIdHolder';
import { KalturaPlayReadyDigitalAudioOPL } from './KalturaPlayReadyDigitalAudioOPL';
import { KalturaPlayReadyCompressedDigitalVideoOPL } from './KalturaPlayReadyCompressedDigitalVideoOPL';
import { KalturaPlayReadyDigitalAudioOPIdHolder } from './KalturaPlayReadyDigitalAudioOPIdHolder';
import { KalturaPlayReadyUncompressedDigitalVideoOPL } from './KalturaPlayReadyUncompressedDigitalVideoOPL';
import { KalturaPlayReadyPlayEnablerHolder } from './KalturaPlayReadyPlayEnablerHolder';
import { KalturaPlayReadyRight, KalturaPlayReadyRightArgs } from './KalturaPlayReadyRight';

export interface KalturaPlayReadyPlayRightArgs  extends KalturaPlayReadyRightArgs {
    analogVideoOPL? : KalturaPlayReadyAnalogVideoOPL;
	analogVideoOutputProtectionList? : KalturaPlayReadyAnalogVideoOPIdHolder[];
	compressedDigitalAudioOPL? : KalturaPlayReadyDigitalAudioOPL;
	compressedDigitalVideoOPL? : KalturaPlayReadyCompressedDigitalVideoOPL;
	digitalAudioOutputProtectionList? : KalturaPlayReadyDigitalAudioOPIdHolder[];
	uncompressedDigitalAudioOPL? : KalturaPlayReadyDigitalAudioOPL;
	uncompressedDigitalVideoOPL? : KalturaPlayReadyUncompressedDigitalVideoOPL;
	firstPlayExpiration? : number;
	playEnablers? : KalturaPlayReadyPlayEnablerHolder[];
}


export class KalturaPlayReadyPlayRight extends KalturaPlayReadyRight {

    analogVideoOPL : KalturaPlayReadyAnalogVideoOPL;
	analogVideoOutputProtectionList : KalturaPlayReadyAnalogVideoOPIdHolder[];
	compressedDigitalAudioOPL : KalturaPlayReadyDigitalAudioOPL;
	compressedDigitalVideoOPL : KalturaPlayReadyCompressedDigitalVideoOPL;
	digitalAudioOutputProtectionList : KalturaPlayReadyDigitalAudioOPIdHolder[];
	uncompressedDigitalAudioOPL : KalturaPlayReadyDigitalAudioOPL;
	uncompressedDigitalVideoOPL : KalturaPlayReadyUncompressedDigitalVideoOPL;
	firstPlayExpiration : number;
	playEnablers : KalturaPlayReadyPlayEnablerHolder[];

    constructor(data? : KalturaPlayReadyPlayRightArgs)
    {
        super(data);
        if (typeof this.analogVideoOutputProtectionList === 'undefined') this.analogVideoOutputProtectionList = [];
		if (typeof this.digitalAudioOutputProtectionList === 'undefined') this.digitalAudioOutputProtectionList = [];
		if (typeof this.playEnablers === 'undefined') this.playEnablers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyPlayRight' },
				analogVideoOPL : { type : 'en', subTypeConstructor : KalturaPlayReadyAnalogVideoOPL, subType : 'KalturaPlayReadyAnalogVideoOPL' },
				analogVideoOutputProtectionList : { type : 'a', subTypeConstructor : KalturaPlayReadyAnalogVideoOPIdHolder, subType : 'KalturaPlayReadyAnalogVideoOPIdHolder' },
				compressedDigitalAudioOPL : { type : 'en', subTypeConstructor : KalturaPlayReadyDigitalAudioOPL, subType : 'KalturaPlayReadyDigitalAudioOPL' },
				compressedDigitalVideoOPL : { type : 'en', subTypeConstructor : KalturaPlayReadyCompressedDigitalVideoOPL, subType : 'KalturaPlayReadyCompressedDigitalVideoOPL' },
				digitalAudioOutputProtectionList : { type : 'a', subTypeConstructor : KalturaPlayReadyDigitalAudioOPIdHolder, subType : 'KalturaPlayReadyDigitalAudioOPIdHolder' },
				uncompressedDigitalAudioOPL : { type : 'en', subTypeConstructor : KalturaPlayReadyDigitalAudioOPL, subType : 'KalturaPlayReadyDigitalAudioOPL' },
				uncompressedDigitalVideoOPL : { type : 'en', subTypeConstructor : KalturaPlayReadyUncompressedDigitalVideoOPL, subType : 'KalturaPlayReadyUncompressedDigitalVideoOPL' },
				firstPlayExpiration : { type : 'n' },
				playEnablers : { type : 'a', subTypeConstructor : KalturaPlayReadyPlayEnablerHolder, subType : 'KalturaPlayReadyPlayEnablerHolder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyPlayRight',KalturaPlayReadyPlayRight);

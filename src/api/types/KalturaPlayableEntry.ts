
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDurationType } from './KalturaDurationType';
import { KalturaBaseEntry, KalturaBaseEntryArgs } from './KalturaBaseEntry';

export interface KalturaPlayableEntryArgs  extends KalturaBaseEntryArgs {
    msDuration? : number;
}


export class KalturaPlayableEntry extends KalturaBaseEntry {

    readonly plays : number;
	readonly views : number;
	readonly lastPlayedAt : Date;
	readonly width : number;
	readonly height : number;
	readonly duration : number;
	msDuration : number;
	readonly durationType : KalturaDurationType;

    constructor(data? : KalturaPlayableEntryArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayableEntry' },
				plays : { type : 'n', readOnly : true },
				views : { type : 'n', readOnly : true },
				lastPlayedAt : { type : 'd', readOnly : true },
				width : { type : 'n', readOnly : true },
				height : { type : 'n', readOnly : true },
				duration : { type : 'n', readOnly : true },
				msDuration : { type : 'n' },
				durationType : { type : 'es', readOnly : true, subTypeConstructor : KalturaDurationType, subType : 'KalturaDurationType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayableEntry',KalturaPlayableEntry);
